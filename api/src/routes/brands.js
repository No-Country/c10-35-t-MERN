const express = require("express");
const router = express.Router();

const Brand = require("../controllers/brands.controller");


router
    .route("/")
    .get(Brand.findAll)
    .post(Brand.create);


module.exports = router;