// import app from "./app.js";
// import { sequelize } from "./database/db.js";
const app = require('./app')

const Sequelize = require('sequelize');
require('dotenv').config();
const {DB_NAME,DB_USERNAME, DB_PASSWORD,DB_DIALECT,DB_PORT,DB_HOST} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  dialect: DB_DIALECT,
  host: DB_HOST,
  port: Number(DB_PORT),
});

const startServer = async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(app.get('port'), () => console.log('server running on port:', app.get('port')));
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
