const service = require('../services/brands.service');
const { errorHandler } = require('../utils/errors');

// Create and Save a new Brand
exports.create = async (req, res) => {
  try {
    return res.status(201).json(await service.create(req.body));
  } catch (error) {
    errorHandler(error, res);
  }
};

// Retrieve all Brands from the database.
exports.findAll = async (req, res) => {
  try {
    return res.json(await service.getAll(req.query.name));
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.findById = async (req, res) => {
  try {
    return res.json(await service.get(Number(req.params.id)));
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.update = async (req, res) => {
  try {
    return res.json(await service.update(Number(req.params.id), req.body));
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.delete = async (req, res) => {
  try {
    return res.json(await service.remove(Number(req.params.id)));
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.login = (req, res) => {
  res.send('Login Route');
};
