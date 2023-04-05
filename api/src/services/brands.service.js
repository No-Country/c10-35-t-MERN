const Brand = require('../models/index').Brands;
const AppError = require('../utils/errors');

const create = async (brand) => {
  if (!brand.brand_name) {
    throw new AppError('Content can not be empty!', 400);
  }

  const newBrand = { ...brand };
  newBrand.isAvailable = brand.isAvailable ? brand.isAvailable : false;

  return await Brand.create(newBrand);
};

const getAll = async (name) => {
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  return await Brand.findAll({ where: condition });
};

const get = async (id) => {
  const brandFound = await Brand.findByPk(id);

  if (!brandFound) {
    throw new AppError(`Brand #${id} not found`, 404);
  }

  return brandFound;
};

const update = async (id, brand) => {
  const brandFound = await Brand.findByPk(id);

  if (!brandFound) {
    throw new AppError(`Brand #${id} not found`, 404);
  }

  const result = await brandFound.save();

  return {
    message: 'The Brand was updated successfully.',
    response: result,
  };
};

const remove = async (id) => {
  const brandFound = await Brand.findByPk(id);

  if (!brandFound) {
    throw new AppError(`Brand ${id} not found`, 404);
  }

  brandFound.isAvailable = false;

  return await brandFound.save();
};

module.exports = {
  create,
  getAll,
  get,
  update,
  remove,
};
