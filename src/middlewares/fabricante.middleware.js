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


const validarDatosFabricante = (req, res, next) => {
    const { error } = fabricanteSchema.validate(req.body)
    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }
    next();
}
fabricanteMiddleware.validarDatosFabricante = validarDatosFabricante


const validarTiposDatosFabricante = (req, res, next) => {
    const { nombre, direccion, numeroContacto, pathImgPerfil } = req.body

    if ( nombre && typeof nombre !== 'string' ) {
        return res.status(400).json({ error: 'El nombre debe ser una cadena de texto.' })
    }
    if ( direccion && typeof direccion !== 'string' ) {
        return res.status(400).json({ error: 'La dirección debe ser una cadena de texto.' })
    }
    if ( numeroContacto && typeof numeroContacto !== 'string' ) {
        return res.status(400).json({ error: 'El número de contacto debe ser una cadena de texto.' })
    }
    if ( pathImgPerfil && typeof pathImgPerfil !== 'string' ) {
        return res.status(400).json({ error: 'La ruta de la inagen de perfil debe ser una cadena de texto.' })
    }

    next()
}
fabricanteMiddleware.validarTiposDatosFabricante = validarTiposDatosFabricante



module.exports = fabricanteMiddleware