require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
   logging: false, 
   native: false, 
 }); 
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/Models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/Models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// const { Users, Courses, Categories, Reviews, Orders } = sequelize.models;

// Courses.belongsToMany(Users, {through: 'users_courses', timestamps: false});
// Users.belongsToMany(Courses, {through: 'users_courses', timestamps: false});

// Categories.belongsToMany(Courses, {through: 'courses_categories', timestamps: false});
// Courses.belongsToMany(Categories, {through: 'courses_categories', timestamps: false});

// Reviews.belongsTo(Courses);
// Courses.hasMany(Reviews);

// Orders.belongsToMany(Users, {through: 'users_orders', timestamps: false});
// Users.belongsToMany(Orders , {through: 'users_orders', timestamps: false});

// Orders.belongsToMany(Courses, {through: 'courses_orders', timestamps: false});
// Courses.belongsToMany(Orders, {through: 'courses_orders', timestamps: false});


module.exports = {
  ...sequelize.models, 
  conn: sequelize     
};