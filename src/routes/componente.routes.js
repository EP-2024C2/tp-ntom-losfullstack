const { Router } = require('express')
const schemasValidator = require('../middlewares/schemasValidate.middlewares')
const { validateComponente } = require('../middlewares/componente.middleware')
const componenteController = require('../controllers/componente.controllers')
const componenteSchemas = require('../schemas/componente.schema')

const routes = Router()

routes.get('/', componenteController.obtenerComponentes)
routes.get('/:id',validateComponente, componenteController.obtenerComponenteById)
routes.post('/', schemasValidator(componenteSchemas), componenteController.agregarComponente)


module.exports = routes;