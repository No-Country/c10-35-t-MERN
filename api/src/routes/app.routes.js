const router = require('express').Router();

const userRoutes = require('../routes/users.routes');
const brandRoutes = require('../routes/brands.routes');
const categories = require('../routes/categories.routes');
const orderRoutes = require('./orders.routes');
const productRoutes = require('./products.routes');

router.use('/users', userRoutes);
router.use('/brands', brandRoutes);
router.use('/categories', categories);
router.use('/orders', orderRoutes);
router.use('/products', productRoutes);

module.exports = router;
