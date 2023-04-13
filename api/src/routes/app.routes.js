const router = require('express').Router();



const userRoutes = require('../routes/users.routes')
const brandRoutes = require('../routes/brands.routes')
const categories = require('../routes/categories.routes')
const products = require('../routes/products.routes')
const suppliers = require('../routes/suppliers.routes')

/**
 * @openapi
 * tags:
 * name: Users
 * description: Users management
 */
router.use('/users',userRoutes)
/**
 * @swagger
 *  tags:
 *   name: Brands
 *   description: Brands management
 */
router.use('/brands',brandRoutes)
/**
 * @swagger
 * tags:
 * name: Categories
 * description: Categories management
 */
router.use('/categories',categories)
/**
 * @swagger
 * tags:
 * name: Products
 * description: Products management
 */
router.use('/products',products)
/**
 * @swagger
 * tags:
 * name: Suppliers
 * description: Suppliers management
 */
router.use('/suppliers',suppliers)



module.exports = router;
