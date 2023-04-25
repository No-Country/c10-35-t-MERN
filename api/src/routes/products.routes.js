const router = require('express').Router();
const {
  getAll,
  createProduct,
  modifyProduct,
  update,
  getByCategoryId,
  deleteProduct
} = require('../controllers/products.controller');

router.get('/:idUser', getAll); // ruta para pedir los productos del usuario

router.get('/filter/:categoryId/:userId', getByCategoryId); //ruta para enviar productos filtrados por categoria

router.post('/create', createProduct); //ruta para crear producto

router.put('/modify', modifyProduct); //ruta para agregar o restar productos de stock

router.put('/update', update); //ruta para actualizar producto

router.delete('/delete/:productId/:userId', deleteProduct); //ruta para eliminar producto')

module.exports = router;
