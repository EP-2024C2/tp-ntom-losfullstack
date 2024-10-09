const { Fabricante } = require('../models/Fabricante')
const fabricanteMiddleware = {}

const validarIdFabricante = (req, res, next) => {
    const id = req.params.id

    if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'ID no válido'})
    }

    next()
}
fabricanteMiddleware.validarIdFabricante = validarIdFabricante


module.exports = fabricanteMiddleware