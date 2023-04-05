const express = require('express');
const router = express.Router();

const { createUser } = require('../Controllers/users');

router.post('/create', createUser) 

module.exports = router