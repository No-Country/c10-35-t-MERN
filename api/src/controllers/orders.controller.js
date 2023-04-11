const service = require('../services/orders.service');
const { errorHandler } = require('../utils/errors');

const register = async (req, res) => {
  try {
    return res.status(201).json(await service.create(req.body));
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAll = async (_req, res) => {
  try {
    return res.json(await service.getAll());
  } catch (error) {
    errorHandler(error, res);
  }
};

const remove = async (req, res) => {
  try {
    return res.json(await service.remove(Number(req.params.id)));
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  register,
  getAll,
  remove,
};
