'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product_Users.belongsTo(models.Products, {
        foreignKey: 'productId',
        // as: 'product',
      });
      Product_Users.belongsTo(models.Users, {
        foreignKey: 'userId',
        // as: 'user',
      });
      Product_Users.belongsTo(models.Categories, {
        foreignKey: 'categoryId',
        // as: 'category',
      });

    }
  }
  Product_Users.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'userId',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'productId',
        references: {
          model: 'Products',
          key: 'id',
        },
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
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'categoryId',
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Product_Users',
      tableName: 'Product_Users',
      timestamps: true,
    }
  );
  return Product_Users;
};
