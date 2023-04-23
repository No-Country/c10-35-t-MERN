const service = require('../services/reports.service');
const { errorHandler } = require('../utils/errors');

const CategoriesVsQuantity = async (req, res) => {
    try {
        return res.status(200).json(await service.CategoriesVsQuantity(req.params.userId));
    } catch (error) {
        errorHandler(error, res);
    }
};

const totalQuantitySales = async (req, res) => {
    try {
        return res.status(200).json(await service.totalQuantitySales(req.params.userId));
    }
    catch (error) {
        errorHandler(error, res);
    }
};

const totalSales = async (req, res) => {
    try {
        return res.status(200).json(await service.totalSales(req.params.userId));
    }
    catch (error) {
        errorHandler(error, res);
    }
};

module.exports = {
    CategoriesVsQuantity,
    totalQuantitySales,
    totalSales,
};