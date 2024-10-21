const { Router } = require('express');
const schemasValidator = require('../middlewares/schemasValidate.middlewares');
const { validateProducto } = require('../middlewares/producto.middleware');
const productoController = require('../controllers/producto.controllers');
const productoSchemas = require('../schemas/producto.schema');

const routes = Router();

routes.get('/', productoController.obtenerProductos);
routes.get('/:id', validateProducto, productoController.obtenerProductoById);
routes.post('/', schemasValidator(productoSchemas), productoController.agregarProducto);
routes.put('/:id', validateProducto, productoController.modificarProducto);
routes.delete('/:id', validateProducto, productoController.eliminarProducto);
routes.post('/:id/fabricantes', validateProducto, productoController.crearProductoConFabricante);
routes.get('/:id/fabricantes', validateProducto, productoController.obtenerFabricantesDeProducto);
routes.post('/:id/componentes', validateProducto, productoController.crearProductoConComponentes);
routes.get('/:id/componentes', validateProducto, productoController.obtenerComponentesDeProducto);


module.exports = routes;