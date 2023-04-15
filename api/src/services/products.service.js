const Products = require('../models/index').Products;
const Product_Users = require('../models/index').Product_Users;
const Product_Details = require('../models/index').Product_Details;
const User = require('../models/index').Users;
const { where } = require('sequelize');
const { AppError } = require('../utils/errors');

const findAll = async (idUser) => {
  return Products.findAll({
    where: { isAvailable: true },
    include: [
      {
        model: Product_Users,
        as: 'productUser',
        where: { userId: idUser, isAvailable: true },
        attributes: ['id', 'userId', 'productId', 'description', 'image', 'price', 'cost', 'minimum_stock', 'stock', 'categoryId'],
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
        attributes: ['id', 'userId', 'productId', 'description', 'image', 'price', 'cost', 'minimum_stock', 'stock', 'categoryId'],
      },
    ],
  });
};

const createProduct = async (product) => {
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
  });
  // console.log(userFound.dataValues);
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
  });

  const [productUser, RelationCreated] = await Product_Users.findOrCreate({
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

  });

  return {
    message: `The product ${productName} has been successfully created  `,
    product: productFound,
    productUser: productUser,
  };
};

const updateStock = async (product) => {
  const { productId, userId, quantity } = product;

  console.log("entrando al servicio")

  if (!quantity || !userId || !productId) {
    throw new AppError('Mandatory data is missing', 400);
  }

  const userFound = await User.findOne({
    where: { id: userId, isAvailable: true },
  });

  if (!userFound) {
    throw new AppError('User not found', 404);
  }

  const productFound = await Products.findOne({
    where: { id: productId, isAvailable: true },
  });

  if (!productFound) {
    throw new AppError('Product not found', 404);
  }

  const userProducts = await Product_Users.findOne({
    where: { userId, productId, isAvailable: true },
  });

  console.log("quantity", quantity)
  const newStock = userProducts.stock + quantity;

  console.log("nuevo stock", newStock)

  if (newStock < 0) {
    throw new AppError('The stock of the product cannot be less than 0', 400);
  }

  console.log("a punto de actualizar")

  userProducts.stock = newStock;

  await userProducts.save();

  return {
    message: 'Successfully modified product',
    product: {
      id: productFound.id,
      product_name: productFound.product_name,
      userProducts
    }

    // productUser: userProducts,
    // user: userFindAll,
  };
};

module.exports = {
  findAll,
  createProduct,
  updateStock,
  findByCategoryId
};
