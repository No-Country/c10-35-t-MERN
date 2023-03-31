'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order_Details.belongsTo(models.Orders, {
        foreignKey: 'orderId',
        as: 'order'
      })
      Order_Details.belongsTo(models.Products, {
        foreignKey: 'productId',
        as: 'product'
      })
    }
  }
  Order_Details.init({
    id: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
    orderId: DataTypes.INTEGER,
    isAvailable: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order_Details',
  });
  return Order_Details;
};