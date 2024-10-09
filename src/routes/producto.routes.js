const { Router } = require('express')
const schemasValidator = require('../schemas/producto.schema')
const productoController = require('../controllers/producto.controllers')
const { validateProducto } = require('../middlewares/producto.middleware')

const routes = Router();

routes.get('/', productoController.obtenerProductos);
routes.get('/:id',validateProducto, productoController.obtenerProductoById);
routes.post('/', schemasValidator(productoSchemas), productoController.agregarProducto);


module.exports = routes;