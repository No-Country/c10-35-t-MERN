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
      Orders.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'user'
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
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Orders',
    tableName: 'Orders',
    timestamps: true,
  });
  return Orders;
};