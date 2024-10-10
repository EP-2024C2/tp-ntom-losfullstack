const { Router } = require('express')
const routes = Router()
const fabricanteController = require('../controllers/fabricante.controller')
const fabricanteMiddleware = require('../middlewares/fabricante.middleware')

routes.get('/fabricantes',
    fabricanteController.getFabricantes)

routes.get('/fabricantes/:id',
    fabricanteMiddleware.validarIdFabricante,
    fabricanteController.getFabricante)

routes.post('/fabricantes',
    fabricanteMiddleware.validarDatosFabricante,
    fabricanteController.addFabricante)

routes.put('/fabricantes/:id',
    fabricanteMiddleware.validarIdFabricante,
    fabricanteMiddleware.validarTiposDatosFabricante,
    fabricanteController.updateFabricante)

routes.delete('/fabricantes/:id', )
routes.get('/fabricantes/:id/productos', )

module.exports = routes