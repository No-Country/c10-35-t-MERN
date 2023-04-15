const router = require('express').Router();
const {
  getAll,
  createProduct,
  modifyProduct,
} = require('../controllers/products.controller');

router.get('/', getAll);
router.post('/create', createProduct);
//por hacer
router.put('/modify', modifyProduct);

module.exports = router;
