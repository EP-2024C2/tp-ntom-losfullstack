const Joi = require('joi')

const fabricanteSchema = Joi.object({
    nombre: Joi.string().min(3).required().messages({
        'string.base': 'El nombre debe ser una cadena de texto.',
        'string.empty': 'El nombre no puede estar vacío.',
        'string.min': 'El nombre debe tener al menos {#limit} caracteres.',
        'any.required': 'El nombre es obligatorio.'
    }),
    direccion: Joi.string().min(5).required().messages({
        'string.base': 'La dirección debe ser una cadena de texto.',
        'string.empty': 'La dirección no puede estar vacía.',
        'string.min': 'La dirección debe tener al menos {#limit} caracteres.',
        'any.required': 'La dirección es obligatoria.'
    }),
    numeroContacto: Joi.string().min(8).required().messages({
        'string.base': 'El número de contacto debe ser una cadena de texto.',
        'string.empty': 'El número de contacto no puede estar vacío.',
        'string.min': 'El número de contacto debe tener al menos {#limit} caracteres.',
        'any.required': 'El número de contacto es obligatorio.'
    }),
    pathImgPerfil: Joi.string().min(5).optional().messages({
        'string.base': 'La ruta de la imagen de perfil debe ser una cadena de texto.',
        'string.empty': 'La ruta de la imagen de perfil no puede estar vacía.',
        'string.min': 'La ruta de la imagen de perfil debe tener al menos {#limit} caracteres.'
    }),
})

module.exports = fabricanteSchema