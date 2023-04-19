const db = require('../models/index');
const Suppliers = db.Suppliers;



const findAll = async () => {
    return await Suppliers.findAll();
};

const create = async (supplier) => {
    const { supplier_name, contact_phone, contact_email } = supplier;

    const [newSupplier, created] = await Suppliers.findOrCreate({
        where: {
            supplier_name: supplier_name,
            contact_phone: contact_phone,
            contact_email: contact_email
        },
        defaults: {
            supplier_name: supplier_name,
            contact_phone: contact_phone,
            contact_email: contact_email
        }
    });

    return newSupplier;
};

module.exports = {
    findAll,
    create
};