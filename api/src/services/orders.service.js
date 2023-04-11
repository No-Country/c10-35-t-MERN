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

const addDetail = async (orderDetail) => {
  const { orderId, productId, quantity, price, discount } = orderDetail;

  if (!orderId || !productId || !quantity || !price || !discount) {
    throw new AppError('the fields are required!', 400);
  }

  return await OrderDetail.create(orderDetail);
};

module.exports = {
  create,
  getAll,
  remove,
  addDetail,
};
