const dotenv = require('dotenv');

dotenv.config();

// Here will be all the env variables.
const PORT = process.env.PORT || '5000';
const API_PATH = process.env.API_PATH || '/api/v1';
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  PORT,
  API_PATH,
  NODE_ENV,
};
