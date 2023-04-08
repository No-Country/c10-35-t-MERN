const router = require('express').Router();
const { getAll } = require('../controllers/products.controller');

router.get('/', getAll);

module.exports = router;
