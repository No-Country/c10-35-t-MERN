'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Tokens, {
        foreignKey: 'userId',
        as: 'tokens'

      })
      Users.hasMany(models.Category_Users, {
        foreignKey: 'userId',
        as: 'category_users'
      })
      Users.hasMany(models.Orders, {
        foreignKey: 'userId',
        as: 'orders'
      })
      }
    }
  Users.init({
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
    //,
    // rol:{
    //   type: DataTypes.ENUM('ADMIN', 'EMPLOYEE'),
    //   defaultValue: 'ADMIN'
    // }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Users',
  });
  return Users;
};