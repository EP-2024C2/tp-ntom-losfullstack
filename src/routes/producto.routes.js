const { Router } = require('express');
const schemasValidator = require('../middlewares/schemasValidate.middlewares');
const { validateProducto } = require('../middlewares/producto.middleware');
const productoController = require('../controllers/producto.controllers');
const productoSchemas = require('../schemas/producto.schema');

const routes = Router();

routes.get('/', productoController.obtenerProductos);
routes.get('/:id',validateProducto, productoController.obtenerProductoById);
routes.post('/', schemasValidator(productoSchemas), productoController.agregarProducto);


module.exports = routes;