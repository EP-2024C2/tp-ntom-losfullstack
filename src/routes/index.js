const { Router } = require('express')
const productoRoutes = require('./producto.routes')
const fabricanteRoutes = require('./fabricante.routes')
const componenteRoutes = require('./componente.routes')

const router = Router();

router.use('/producto', productoRoutes);
router.use('/fabricantes', fabricanteRoutes);
router.use('/componente', componenteRoutes);

module.exports = router;