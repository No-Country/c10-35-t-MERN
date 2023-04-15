const Products = require('../models/index').Products;
const Product_Users = require('../models/index').Product_Users;
const Product_Details = require('../models/index').Product_Details;
const User = require('../models/index').Users;
const { where } = require('sequelize');
const { AppError } = require('../utils/errors');

const findAll = async (idUser) => {
  return Product_Users.findAll(); //agregar where con el idUser
};

// this is for those products that are for consumption (arroz, frijoles, etc.)
const consumerProduct = async (product) => {
  const {
    product_name,
    image,
    price,
    cost,
    minimum_stock,
    supplierId,
    categoryId,
    userId,
  } = product;

  const productName = product_name.toUpperCase();

  const userFound = await Users.findOne({
    where: { id: userId, isAvailable: true },
  });

  if (!userFound) {
    throw new AppError('User not found', 404);
  }

  const [productFound, productCreated] = await Products.findOrCreate({
    where: { product_name: productName, isAvailable: true },
    defaults: {
      product_name: productName,
      image,
      price,
      cost,
      minimum_stock,
      supplierId,
      categoryId,
    },
  });

  const [productUser, RelationCreated] = await Product_Users.findOrCreate({
    where: { userId, productId: productFound.id, isAvailable: true },
  });

  return {
    product: productFound.product_name,
    price: productFound.price,
    cost: productFound.cost,
    minimum_stock: productFound.minimum_stock,
  };
};

const createProduct = async (product) => {
  const {
    product_name,
    description,
    image,
    price,
    cost,
    minimum_stock,
    supplierId,
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
  const productName = product_name.toUpperCase();

  const [productFound, productCreated] = await Products.findOrCreate({
    where: { product_name: productName },
    defaults: {
      product_name: productName,
      description,
      image,
      price,
      cost,
      minimum_stock,
      supplierId,
      categoryId,
    },
  });

  const [productUser, RelationCreated] = await Product_Users.findOrCreate({
    where: { userId, productId: productFound.id, isAvailable: true },
  });

  return {
    message: `The product ${productName} has been successfully created  `,
    product: productFound,
    productUser: productUser,
  };
};

const add = async (product) => {
  const { product_name, price, stockAdd, stockSubstract, userId } = product;

  if (!product_name || !stockAdd || !userId) {
    throw new AppError('Mandatory data is missing', 400);
  }
  const productName = product_name.toUpperCase();

  const userProducts = await Product_Users.findAll({
    where: { userId: userId },
    include: {
      model: Products,
    },
  });

  // const userFindAll = await User.findAll({
  //   include: {
  //     model: category_user,
  //   },
  // });

  const productFound = await Products.findOne({
    where: { product_name: productName },
    include: {
      model: Product_Users,
    },
  });

  return {
    message: 'Successfully modified product',
    product: productFound,
    productUser: userProducts,
    // user: userFindAll,
  };
};

module.exports = {
  findAll,
  createProduct,
  add,
};
