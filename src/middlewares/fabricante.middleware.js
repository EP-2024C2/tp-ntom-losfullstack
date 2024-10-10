const { Fabricante } = require('../models/Fabricante')
const { fabricanteSchema, dataMinLength } = require('../schemas/fabricante.schema')
const fabricanteMiddleware = {}



const validarId = (req, res, next) => {
    const id = req.params.id
    if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'ID no válido'})
    }
    next()
}
fabricanteMiddleware.validarId = validarId



const validarDatos = (req, res, next) => {
    const { error } = fabricanteSchema.validate(req.body)
    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }
    next();
}
fabricanteMiddleware.validarDatos = validarDatos



const validarTiposDatos = (req, res, next) => {
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
fabricanteMiddleware.validarTiposDatos = validarTiposDatos



const validarLongitudDatos = (req, res, next) => {
    const { nombre, direccion, numeroContacto, pathImgPerfil } = req.body

    if ( nombre && nombre.length < dataMinLength.nombre ) {
        return res.status(400).json({ error: `El nombre debe tener al menos ${dataMinLength.nombre} caracteres.` })
    }
    if ( direccion && direccion.length < dataMinLength.direccion ) {
        return res.status(400).json({ error: `La dirección debe tener al menos ${dataMinLength.direccion} caracteres.` })
    }
    if ( numeroContacto && numeroContacto.length < dataMinLength.numeroContacto ) {
        return res.status(400).json({ error: `El número de contacto debe tener al menos ${dataMinLength.numeroContacto} caracteres.` })
    }
    if ( pathImgPerfil && pathImgPerfil.length < dataMinLength.pathImgPerfil ) {
        return res.status(400).json({ error: `La ruta de imagen de perfil debe tener al menos ${dataMinLength.pathImgPerfil} caracteres.` })
    }
    next()
}
fabricanteMiddleware.validarLongitudDatos = validarLongitudDatos


module.exports = fabricanteMiddleware