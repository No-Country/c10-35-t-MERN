'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Brands.hasMany(models.Products, {
        foreignKey: 'brandId',
        as: 'products',
      });
    }
  }
  Brands.init(
    {
      brand_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Brands',
      tableName: 'Brands',
    }
  );
  return Brands;
};
