'use strict';
const { Model } = require('sequelize');
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'productId',
      references: {
        model: 'Products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    discount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'orderId',
      references: {
        model: 'Orders',
        key: 'id'
      }
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Order_Details',
    tableName: 'Order_Details',
    timestamps: true,
  });
  return Order_Details;
};