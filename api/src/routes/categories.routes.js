const router  = require('express').Router();
const { create, deleteCategory, getAll, getByCategoryId, updateCategory } = require('../controllers/categories.controller');

router.post('/', create);
router.delete('/', deleteCategory);
router.put('/', updateCategory);
router.get('/', getAll);
router.get('/:categoryId', getByCategoryId);

module.exports = router;
