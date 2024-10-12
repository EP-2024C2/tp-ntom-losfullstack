const { Router } = require('express')
const productoRoutes = require('./producto.routes')
const fabricanteRoutes = require('./fabricante.routes')

const router = Router();

router.use('/producto', productoRoutes);
router.use('/fabricantes', fabricanteRoutes);

module.exports = router;