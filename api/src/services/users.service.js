const User = require('../models/index').Users;
const bcrypt = require('bcrypt');

const { AppError } = require('../utils/errors');

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log(re.test(email));
  return re.test(email);
};

const register = async (user) => {
  const { full_name, email, password, repeatedPassword } = user;
  if (!full_name || !email || !password || !repeatedPassword) {
    throw new AppError('Mandatory data is missing', 400);
  }
  const userFound = await User.findOne({ where: { email } });
  if (userFound) {
    throw new AppError('This email is already registered', 400);
  }
  if (password !== repeatedPassword) {
    throw new AppError('Passwords do not match', 400);
  }
  // agregar verificacion que el email sea en formato email
  if (!validateEmail(email)) {
    throw new AppError('Email is not valid', 400);
  } 
  const password_hash = await bcrypt.hash(password, 8);
  user.password_hash = password_hash;
  return await User.create(user);
};

const findAll = async () => {
  return await User.findAll();
};
module.exports = {
  register,
  findAll,
};
