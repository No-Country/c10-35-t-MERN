const User = require('../models/index').Users;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { AppError } = require('../utils/errors');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'stocker_3ko1osja';

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
  const userCreated = await User.create(user);
  return [
    { message: 'User successfully created' },
    {
      id: userCreated.id,
      full_name: userCreated.full_name,
      email: userCreated.email,
    },
  ];
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

  return { token: accessToken, userId: userFound.id };
};

module.exports = {
  register,
  findAll,
  login,
};
