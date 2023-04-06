const router = require('express').Router();
const { register, getAll, login } = require('../controllers/users.controller');

router.post('/register', register);
router.post('/login', login);
router.get('/', getAll);

module.exports = router;
