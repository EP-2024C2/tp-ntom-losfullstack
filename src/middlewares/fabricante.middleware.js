const { Fabricante } = require('../models/Fabricante')
const fabricanteSchema = require('../schemas/fabricante.schema')
const fabricanteMiddleware = {}

const validarIdFabricante = (req, res, next) => {
    const id = req.params.id
    if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'ID no válido'})
    }
    next()
}
fabricanteMiddleware.validarIdFabricante = validarIdFabricante


const validarFabricante = (req, res, next) => {
    const { error } = fabricanteSchema.validate(req.body)
    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }
    next();
}
fabricanteMiddleware.validarFabricante = validarFabricante


module.exports = fabricanteMiddleware