const db = require('../models/index');
const Supplier = db.Suppliers;
const { AppError } = require('../utils/errors');

const findAll = async () => {
    return Supplier.findAll();
}

const create = async (supplier) => {
    const { supplier_name, contact_phone, contact_email } = supplier;

    const supplierName = supplier_name.toUpperCase();

    const [ supplierFound, supplierCreated ] = await Supplier.findOrCreate({
        where: { supplier_name: supplierName, isAvailable: true },
    });

    return supplierFound;
}



module.exports = {
    findAll,
    create,
};