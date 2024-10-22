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
    '/:id', validateComponente, componenteController.obtenerComponente
    )
routes.post
    (
    '/', schemasValidator(componenteSchemas.creationSchema), componenteController.agregarComponente
    )
routes.put
    (
    '/:id', validateComponente, schemasValidator(componenteSchemas.updateSchema), componenteController.actualizarComponente
    )
routes.delete
    (
    '/:id', validateComponente, componenteController.borrarComponente
    )
routes.get
    (
    '/:id/productos', validateComponente, componenteController.obtenerProductosDeComponente
    )

module.exports = routes