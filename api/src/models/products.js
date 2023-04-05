"use strict";
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
      Products.belongsTo(models.Suppliers, {
        foreignKey: 'supplierId',
        as: 'supplier'
      })
      Products.belongsTo(models.Categories, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }
  Products.init(
    {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      cost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      minimum_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      supplierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "supplierId",
        references: {
          model: "Suppliers",
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "categoryId",
        references: {
          model: "Categories",
          key: "id",
        },
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
      },
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
