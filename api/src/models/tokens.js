'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tokens.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'user'
      })
    }
  }
  Tokens.init({
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiratedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'userId',
      references: {
        model: 'Users',
        key: 'id'
      }
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
    modelName: 'Tokens',
  });
  return Tokens;
};