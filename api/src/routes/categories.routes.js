const router  = require('express').Router();
const { create, deleteCategory, getAll, getAllByUserId, updateCategory } = require('../controllers/categories.controller');

router.post('/', create);
router.delete('/', deleteCategory);
router.put('/', updateCategory);
router.get('/', getAll);
router.get('/:userId', getAllByUserId);

module.exports = router;