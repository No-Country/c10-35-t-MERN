'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.hasMany(models.Product_Users, {
        foreignKey: 'productId',
        as: 'productUser',
      });
    }
  }
  Products.init(
    {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
    },
    {
      sequelize,
      modelName: "Products",
      tableName: "Products",
      timestamps: true,
    }
  );
  return Products;
};
