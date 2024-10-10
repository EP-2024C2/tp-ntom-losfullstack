const Joi = require('joi')
const dataMinLength = {
    nombre: 3,
    direccion: 5,
    numeroContacto: 8,
    pathImgPerfil: 5
}


const fabricanteSchema = Joi.object({
    nombre: Joi.string().min(dataMinLength.nombre).required().messages({
        'string.base': 'El nombre debe ser una cadena de texto.',
        'string.empty': 'El nombre no puede estar vacío.',
        'string.min': 'El nombre debe tener al menos {#limit} caracteres.',
        'any.required': 'El nombre es obligatorio.'
    }),
    direccion: Joi.string().min(dataMinLength.direccion).required().messages({
        'string.base': 'La dirección debe ser una cadena de texto.',
        'string.empty': 'La dirección no puede estar vacía.',
        'string.min': 'La dirección debe tener al menos {#limit} caracteres.',
        'any.required': 'La dirección es obligatoria.'
    }),
    numeroContacto: Joi.string().min(dataMinLength.numeroContacto).required().messages({
        'string.base': 'El número de contacto debe ser una cadena de texto.',
        'string.empty': 'El número de contacto no puede estar vacío.',
        'string.min': 'El número de contacto debe tener al menos {#limit} caracteres.',
        'any.required': 'El número de contacto es obligatorio.'
    }),
    pathImgPerfil: Joi.string().min(dataMinLength.pathImgPerfil).optional().messages({
        'string.base': 'La ruta de la imagen de perfil debe ser una cadena de texto.',
        'string.empty': 'La ruta de la imagen de perfil no puede estar vacía.',
        'string.min': 'La ruta de la imagen de perfil debe tener al menos {#limit} caracteres.'
    }),
})


module.exports = { fabricanteSchema, dataMinLength }