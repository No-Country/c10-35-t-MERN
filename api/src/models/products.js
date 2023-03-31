'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.Suppliers, {
        foreignKey: 'supplierId',
        as: 'supplier'
      })
      Products.belongsTo(models.Categories, {
        foreignKey: 'categoryId',
        as: 'category'
      })
    }
  }
  Products.init({
    id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    cost: DataTypes.DECIMAL,
    minimum_stock: DataTypes.INTEGER,
    supplierId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    isAvailable: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};