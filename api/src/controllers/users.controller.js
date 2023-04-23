const service = require('../services/users.service');
const { errorHandler } = require('../utils/errors');

const register = async (req, res) => {
  try {
    return res.status(201).json(await service.register(req.body));
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

const login = async (req, res) => {
  try {
    return res.status(200).json(await service.login(req.body));
  } catch (error) {
    console.log(error);
    errorHandler(error, res);
  }
};
module.exports = {
  register,
  getAll,
  login,
};
