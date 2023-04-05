const service = require('../services/brands.service');
const { errorHandler, AppError } = require('../utils/errors');

const bcrypt = require('bcrypt');




// Create and Save a new Brand
exports.create = async (req, res) => {
  try {
    return res.status(201).json(await service.create(req.body));
  } catch (error) {
    errorHandler(error, res);
  }
};

// Retrieve all Brands from the database.
exports.findAll = async (req, res) => {
  try {
    return res.json(await service.getAll(req.query.name));
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.findById = async (req, res) => {
  try {
    return res.json(await service.get(Number(req.params.id)));
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.update = async (req, res) => {
  try {
    return res.json(await service.update(Number(req.params.id), req.body));
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.delete = async (req, res) => {
  try {
    return res.json(await service.remove(Number(req.params.id)));
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.register = async (req, res) => {
  const { full_name, email, password, repeatedPassword } = req.body;  
  // validaciones
  if(!full_name || !email || !password || !repeatedPassword){
    throw new AppError( 'Mandatory data is missing', 400);
  }
  if (password !== repeatedPassword){
    throw new AppError('Passwords do not match', 400);
  }
  // hash password
    let password_hash = await bcrypt.hash(password, 8);
  
  // Creamos el usuario
  try {
     // const userNew = await Users.create({
  //   full_name: full_name,
  //   email: email,
  //   password_hash: password_hash,
  // });
  res.status(201).json('User successfully created');
  } catch (error) {
    // console.log(error)
    res.status(400).json(error)
  }  
 

  
};

exports.login = (req, res) => {
  res.send('Login Route');
};
