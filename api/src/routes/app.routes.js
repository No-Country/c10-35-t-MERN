const router = require('express').Router();

const userRoutes = require('../routes/users.routes')
const brandRoutes = require('../routes/brands.routes')

router.use('/users',userRoutes)
router.use('/brands',brandRoutes)

module.exports = router