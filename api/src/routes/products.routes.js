const router = require('express').Router();
const { getAll, createProduct } = require('../controllers/products.controller');

router.get('/', getAll);
router.post('/create', createProduct);

module.exports = router;
