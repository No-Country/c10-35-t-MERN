const router = require('express').Router();
const { CategoriesVsQuantity, totalQuantitySales, totalSales } = require('../controllers/reports.controller');

router.get('/categoriesVsQuantity/:userId', CategoriesVsQuantity);
router.get('/totalQuantitySales/:userId', totalQuantitySales);
router.get('/totalSales/:userId', totalSales);

module.exports = router;