const router = require('express').Router();
const controller = require('../controllers/orders.controller');

router.post('/', controller.register);
router.get('/', controller.getAll);
router.delete('/:id', controller.remove);
router.post('/addDetail', controller.addDetail);

module.exports = router;
