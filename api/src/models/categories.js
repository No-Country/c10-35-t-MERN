'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Categories.hasMany(models.Products, {
        foreignKey: 'categoryId',
        as: 'products'
      })
    }
  }
  Categories.init({
    id: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};