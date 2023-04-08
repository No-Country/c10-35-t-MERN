const Products = require('../models/index').Products;
const Product_Users = require('../models/index').Product_Users;
const { AppError } = require('../utils/errors');

const findAll = async (idUser) => {
  return Product_Users.findAll();
};

// this is for those products that are for consumption (arroz, frijoles, etc.)
const consumerProduct = async (product) => {
  const { product_name, image, price, cost, minimum_stock, supplierId, categoryId, userId} = product;
  
  const productName = product_name.toUpperCase();

  const userFound = await Users.findOne({ where: { id: userId , isAvailable: true}});

  if (!userFound) {
    throw new AppError('User not found', 404);
  }

  const [ productFound, productCreated ] = await Products.findOrCreate({
    where: { product_name: productName , isAvailable: true},
  });

  const [ productUser, RelationCreated] = await Product_Users.findOrCreate({
    where: { userId, productId: productFound.id , isAvailable: true}
  });

  
  return {
    product: productFound.product_name,
    price:   productFound.price,
    cost:    productFound.cost,
    minimum_stock: productFound.minimum_stock,
  };
};

module.exports = {
  findAll,
};
