'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product_Details.belongsTo(models.Products, {
        foreignKey: 'productId',
        as: 'product'
      })
      Product_Details.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        as: 'brand'
      })
    }
  }
  Product_Details.init({
    id: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    expirationDate: DataTypes.DATE,
    isAvailable: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product_Details',
  });
  return Product_Details;
};