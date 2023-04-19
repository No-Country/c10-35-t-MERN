const db = require('../models/index');
const Products = db.Products;
const Product_Users = db.Product_Users;
const User = db.Users;
const { AppError } = require('../utils/errors');

const findAll = async (idUser) => {
  return Products.findAll({
    where: { isAvailable: true },
    include: [
      {
        model: Product_Users,
        as: 'productUser',
        where: { userId: idUser, isAvailable: true },
        attributes: [
          'id',
          'userId',
          'productId',
          'description',
          'image',
          'price',
          'cost',
          'minimum_stock',
          'stock',
          'categoryId',
        ],
      },
    ],
  });
};

const findByCategoryId = async (categoryId, idUser) => {
  return Products.findAll({
    where: { isAvailable: true },
    include: [
      {
        model: Product_Users,
        as: 'productUser',
        where: { userId: idUser, categoryId: categoryId, isAvailable: true },
        attributes: [
          'id',
          'userId',
          'productId',
          'description',
          'image',
          'price',
          'cost',
          'minimum_stock',
          'stock',
          'categoryId',
        ],
      },
    ],
  });
};

const createProduct = async (products) => {
  let transaction;

  try {
    transaction = await db.sequelize.transaction();

    const createdProducts = [];

    for (const product of products) {
      let {
        product_name,
        image,
        price,
        cost,
        minimum_stock,
        stock,
        categoryId,
        userId,
      } = product;

      if (!product_name || !userId || !price) {
        throw new AppError('Mandatory data is missing', 400);
      }

      const userFound = await User.findOne({
        where: { id: userId, isAvailable: true },
        transaction,
      });

      if (!userFound) {
        throw new AppError('User not found', 404);
      }

      if (stock == 0) {
        throw new AppError('The stock of the product cannot be 0', 400);
      }

      const productName = product_name.toUpperCase();

      if (!image) {
        image =
          'https://th.bing.com/th/id/R.711dad5b8a1d5177174fbb45c238396d?rik=o9djzgLOunL93Q&pid=ImgRaw&r=0';
      }

      const [productFound, productCreated] = await Products.findOrCreate({
        where: { product_name: productName },
        defaults: {
          product_name: productName,
        },
        transaction,
      });

      const [productUser, relationCreated] = await Product_Users.findOrCreate({
        where: { userId, productId: productFound.id },
        defaults: {
          userId: userId,
          productId: productFound.id,
          categoryId: categoryId,
          stock: stock,
          minimum_stock: minimum_stock,
          cost: cost,
          price: price,
          image: image,
        },
        transaction,
      });

      createdProducts.push({
        message: `The product ${productName} has been successfully created  `,
        product: productFound,
        productUser: productUser,
      });
    }

    await transaction.commit();

    return createdProducts;
  } catch (error) {
    if (transaction) await transaction.rollback();

    throw error;
  }
};

const updateStock = async (products) => {
  if (!products || !Array.isArray(products)) {
    throw new AppError('Products data is missing or not an array', 400);
  }

  // Iniciar la transacción
  const transaction = await db.sequelize.transaction();

  try {
    const results = await Promise.all(
      products.map(async (product) => {
        const { productId, userId, quantity } = product;

        if (!quantity || !userId || !productId) {
          throw new AppError('Mandatory data is missing', 400);
        }

        const userFound = await User.findOne({
          where: { id: userId, isAvailable: true },
          transaction,
        });

        if (!userFound) {
          throw new AppError('User not found', 404);
        }

        const productFound = await Products.findOne({
          where: { id: productId, isAvailable: true },
          transaction,
        });

        if (!productFound) {
          throw new AppError('Product not found', 404);
        }

        const userProducts = await Product_Users.findOne({
          where: { userId, productId, isAvailable: true },
          transaction,
        });

        const newStock = userProducts.stock + quantity;

        if (newStock < 0) {
          throw new AppError(
            'The stock of the product cannot be less than 0',
            400
          );
        }

        userProducts.stock = newStock;

        await userProducts.save({ transaction });

        return {
          id: productFound.id,
          product_name: productFound.product_name,
          userProducts,
        };
      })
    );

    // Confirmar la transacción
    await transaction.commit();

    return {
      message: 'Successfully modified products',
      products: results,
    };
  } catch (error) {
    // Deshacer la transacción en caso de error
    await transaction.rollback();
    throw error;
  }
};

module.exports = {
  findAll,
  createProduct,
  updateStock,
  findByCategoryId,
};
