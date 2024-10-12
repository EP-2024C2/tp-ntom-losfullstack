const { Router } = require('express')
const routes = Router()
const fabricanteController = require('../controllers/fabricante.controller')
const fabricanteMiddleware = require('../middlewares/fabricante.middleware')


routes.get('/',
    fabricanteController.obtenerFabricantes)

routes.get('/:id',
    fabricanteMiddleware.validarId,
    fabricanteController.obtenerFabricante)

routes.post('/',
    fabricanteMiddleware.validarDatos,
    fabricanteController.agregarFabricante)

routes.put('/:id', 
    fabricanteMiddleware.validarId,
    fabricanteMiddleware.validarTiposDatos,
    fabricanteMiddleware.validarLongitudDatos,
    fabricanteController.actualizarFabricante)

routes.delete('/:id',
    fabricanteMiddleware.validarId,
    fabricanteController.borrarFabricante)

routes.get('/:id/productos', 
    fabricanteMiddleware.validarId,
    fabricanteController.obtenerProductosDeFabricante)


module.exports = routes
