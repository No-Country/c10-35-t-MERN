'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
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
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'brandId',
      references: {
        model: 'Brand',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'productId',
      references: {
        model: 'Products',
        key: 'id'
      }
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,

    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Product_Details',
  });
  return Product_Details;
};