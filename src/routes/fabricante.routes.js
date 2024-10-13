const { Router } = require('express')
const routes = Router()
const fabricanteController = require('../controllers/fabricante.controller')
const fabricanteMiddleware = require('../middlewares/fabricante.middleware')


routes.get('/fabricantes',
    fabricanteController.getFabricantes)

routes.get('/fabricantes/:id',
    fabricanteMiddleware.validarId,
    fabricanteController.getFabricante)

routes.post('/fabricantes',
    fabricanteMiddleware.validarDatos,
    fabricanteController.addFabricante)

routes.put('/fabricantes/:id', 
    fabricanteMiddleware.validarId,
    fabricanteMiddleware.validarTiposDatos,
    fabricanteMiddleware.validarLongitudDatos,
    fabricanteController.updateFabricante)

routes.delete('/fabricantes/:id',
    fabricanteMiddleware.validarId,
    fabricanteController.deleteFabricante)

routes.get('/fabricantes/:id/productos', 
    fabricanteMiddleware.validarId,
    fabricanteController.getProductsByFabricante)


module.exports = routes