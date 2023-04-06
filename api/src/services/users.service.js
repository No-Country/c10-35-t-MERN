const User = require('../models/index').Users;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { AppError } = require('../utils/errors');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'stocker_3ko1osja';

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
  const password_hash = await bcrypt.hash(password, 8);
  user.password_hash = password_hash;
  return await User.create(user);
};

const findAll = async () => {
  return await User.findAll();
};

const login = async (user) => {
  const { email, password } = user;
  if (!email || !password) {
    throw new AppError('Email and password are required', 400);
  }
  const userFound = await User.findOne({ where: { email } });
  if (!userFound) {
    throw new AppError('The user is not registered', 400);
  }
  const isPasswordValid = await bcrypt.compare(
    password,
    userFound.password_hash
  );
  if (!isPasswordValid) {
    throw new AppError('Incorrect credentials', 400);
  }
  const accessToken = jwt.sign({ userId: user.id }, accessTokenSecret, {
    expiresIn: '15m',
  });

  return { token: accessToken };
};

module.exports = {
  register,
  findAll,
  login,
};
