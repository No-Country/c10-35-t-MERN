const service = require('../services/categories.service');
const { errorHandler } = require('../utils/errors');

const create = async (req, res) => {
  try {
    return res.status(201).json(await service.create(req.body));
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAll = async (req, res) => {
  try {
    return res.status(200).json(await service.findAll());
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllByUserId = async (req, res) => {
  try {
    return res
      .status(200)
      .json(await service.findAllByUserId(req.params.userId));
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCategory = async (req, res) => {
  try {
    return res.status(200).json(await service.deleteCategory(req.body));
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCategory = async (req, res) => {
  try {
    return res.status(200).json(await service.updateCategory(req.body));
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  create,
  getAll,
  getAllByUserId,
  deleteCategory,
  updateCategory,
};
