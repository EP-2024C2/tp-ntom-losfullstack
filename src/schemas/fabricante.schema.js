const Joi = require('joi')

const fabricanteSchema = Joi.object({
    nombre: Joi.string().min(3).required(),
    direccion: Joi.string().min(3).required(),
    numeroContacto: Joi.string().min(8).required(),
    pathImgPerfil: Joi.string().min(1).optional()
})

module.exports = fabricanteSchema