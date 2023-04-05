const { Router } = require('express');
const userRoutes = require('./users');

const router = Router();




router.use('/users', userRoutes)
    

module.exports = router;