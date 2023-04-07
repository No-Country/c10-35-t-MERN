const router = require('express').Router();

const userRoutes = require('../routes/users.routes');
const brandRoutes = require('../routes/brands.routes');
const productRoutes = require('./products.routes');

router.use('/users', userRoutes);
router.use('/brands', brandRoutes);
router.use('/products', productRoutes);

module.exports = router;
