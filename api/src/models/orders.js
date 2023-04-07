'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.hasMany(models.Order_Details, {
        foreignKey: 'orderId',
        as: 'order_details'
      })
    }
  }
  Orders.init({
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Orders',
    tableName: 'Orders',
    timestamps: true,
  });
  return Orders;
};