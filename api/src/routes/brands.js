const express = require("express");
const router = express.Router();

const Brand = require("../controllers/brands.controller");


router
    .route("/")
    .get(Brand.findAll)
    .post(Brand.create)
router.route('/register')
    .post(Brand.register)
router.route('/login')
    .post(Brand.login)

module.exports = router;