const express = require('express');
const router = express.Router();

const controller = require('../controllers/brands.controller');

router.post('/', controller.create);
router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

router.post('/register',controller.register)
/* router
    .route("/")
    .get(Brand.findAll)
    .post(Brand.create)
router.route('/register')
    .post(Brand.register)
router.route('/login')
    .post(Brand.login) */

module.exports = router;
