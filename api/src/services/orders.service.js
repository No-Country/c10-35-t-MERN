const { AppError } = require('../utils/errors');

const Order = require('../models/index').Orders;
const OrderDetail = require('../models/index').Order_Details;

const create = async (order) => {
  if (!order.order_date) {
    throw new AppError("the order date can't be on blank", 400);
  }

  return await Order.create(order);
};

const getAll = async () =>
  await Order.findAll({ where: { isAvailable: true } });

const remove = async (id) => {
  const orderFound = await Order.findByPk(id);

  if (!orderFound) {
    throw new AppError('order not found', 400);
  }

  orderFound.isAvailable = false;

  return await orderFound.save();
};

module.exports = {
  create,
  getAll,
  remove,
};
