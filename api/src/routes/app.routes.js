const router = require('express').Router();

const userRoutes = require('../routes/users.routes');
const brandRoutes = require('../routes/brands.routes');
const categories = require('../routes/categories.routes');
const product = require('../routes/products.routes');

router.use('/users', userRoutes);
router.use('/brands', brandRoutes);
router.use('/categories', categories);
router.use('/products', product);

module.exports = router;
