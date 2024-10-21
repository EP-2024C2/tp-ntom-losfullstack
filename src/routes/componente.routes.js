const {Router} = require('express')
const routes = Router()

const schemasValidator = require('../middlewares/schemasValidate.middlewares')
const {validateComponente} = require('../middlewares/componente.middleware')

const componenteController = require('../controllers/componente.controllers')
const componenteSchemas = require('../schemas/componente.schema')


routes.get
    (
    '/', componenteController.obtenerComponentes
    )
routes.get
    (
    '/:id', validateComponente, componenteController.obtenerComponenteById
    )
routes.post
    (
    '/', schemasValidator(componenteSchemas.creationSchema), componenteController.agregarComponente
    )
routes.put
    (
    '/:id', validateComponente, schemasValidator(componenteSchemas.updateSchema), componenteController.updateComponente
    )
routes.delete
    (
    '/:id', validateComponente, componenteController.deleteComponente
    )
routes.get
    (
    '/:id/productos', validateComponente, componenteController.getProductosByComponente
    )

module.exports = routes