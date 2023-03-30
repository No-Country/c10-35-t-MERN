import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cost: {
    type: DataTypes.DECIMAL,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  minimumStock: {
    type: DataTypes.INTEGER,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // supplierdID y categoryId lo marca la relacion a las otras tablas.
});

export default Product;
