const router = require('express').Router();

const userRoutes = require('../routes/users.routes');
const brandRoutes = require('../routes/brands.routes');
const categories = require('../routes/categories.routes');
const orderRouter = require('./orders.routes');

router.use('/users', userRoutes);
router.use('/brands', brandRoutes);
router.use('/categories', categories);
router.use('/orders', orderRouter);

module.exports = router;
