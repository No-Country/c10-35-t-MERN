const db = require('../models/index');
const { AppError } = require('../utils/errors');

const Categories = db.Categories;
const Products = db.Products;
const Product_Users = db.Product_Users;
const Users = db.Users;
const Orders = db.Orders;
const Order_Details = db.Order_Details;


const CategoriesVsQuantity = async (userId) => {
    const userFound = await Users.findOne({ where: { id: userId , isAvailable: true}});
    
    if (!userFound) {
        throw new AppError('User not found', 404);
    }
    
    const products = await Product_Users.findAll({ where: { userId, isAvailable: true } });
    
    const categories = await Categories.findAll({ where: { isAvailable: true } });
    
    const categoriesVsQuantity = categories.map((category) => {
        const productsByCategory = products.filter((product) => product.categoryId === category.id);
        const quantity = productsByCategory.reduce((acc, product) => acc + product.quantity, 0);
        return {
        category: category.category_name,
        quantity,
        };
    });
    
    return categoriesVsQuantity;
};

const totalQuantitySales = async (userId) => {
    const userFound = await Users.findOne({ where: { id: userId , isAvailable: true}});

    if (!userFound) {
        throw new AppError('User not found', 404);
    }

    const orders = await Orders.findAll({ where: { userId, isAvailable: true } });

    const ordersDetails = await Order_Details.findAll({ where: { isAvailable: true } });

    const totalQuantitySales = orders.reduce((acc, order) => {
        const orderDetails = ordersDetails.filter((orderDetail) => orderDetail.orderId === order.id);
        const quantity = orderDetails.reduce((acc, orderDetail) => acc + orderDetail.quantity, 0);
        return acc + quantity;
    }, 0);


    return totalQuantitySales;
};

const totalSales = async (userId) => {
    const userFound = await Users.findOne({ where: { id: userId , isAvailable: true}});

    if (!userFound) {
        throw new AppError('User not found', 404);
    }

    const orders = await Orders.findAll({ where: { userId, isAvailable: true } });

    const ordersDetails = await Order_Details.findAll({ where: { isAvailable: true } });

    const totalSales = orders.reduce((acc, order) => {
        const orderDetails = ordersDetails.filter((orderDetail) => orderDetail.orderId === order.id);
        const quantity = orderDetails.reduce((acc, orderDetail) => acc + orderDetail.quantity, 0);
        const price = orderDetails.reduce((acc, orderDetail) => acc + orderDetail.price, 0);
        return acc + (quantity * price);
    }, 0);


    return totalSales;
};

const productRotation = async (userId) => {
    const userFound = await Users.findOne({ where: { id: userId , isAvailable: true}});

    if (!userFound) {
        throw new AppError('User not found', 404);
    }

    const products = await Product_Users.findAll({ where: { userId, isAvailable: true } });

    const orders = await Orders.findAll({ where: { userId, isAvailable: true } });

    const ordersDetails = await Order_Details.findAll({ where: { isAvailable: true } });

    const productsRotation = products.map((product) => {
        const ordersByProduct = orders.filter((order) => order.productId === product.id);
        const quantity = ordersByProduct.reduce((acc, order) => acc + order.quantity, 0);
        return {
        product: product.product_name,
        quantity,
        };
    });

    const productWithMinRotation  = productsRotation.reduce((acc, product) => {
        if (acc.quantity > product.quantity) {
            return product;
        }
        return acc;
    }, productsRotation[0]);

    return productWithMinRotation;
};


module.exports = {
    CategoriesVsQuantity,
    totalQuantitySales,
    totalSales,
    productRotation,
};