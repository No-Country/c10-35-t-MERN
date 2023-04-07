const Products = require('../models/index').Products;
const Product_Users = require('../models/index').Product_Users;
const { AppError } = require('../utils/errors');

const findAll = async (idUser) => {
  return Product_Users.findAll();
};

module.exports = {
  findAll,
};
