const service = require('../services/products.service');
const { errorHandler } = require('../utils/errors');

const getAll = async (req, res) => {
  try {
    return res.status(200).json(await service.findAll());
  } catch (error) {
    errorHandler(error, res);
  }
};

const createProduct = async (req, res) => {
  try {
    return res.status(200).json(await service.createProduct(req.body));
  } catch (error) {
    errorHandler(error, res);
  }
};
module.exports = {
  getAll,
  createProduct,
};
