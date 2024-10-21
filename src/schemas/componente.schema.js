const joi = require('joi')

const idSchema = joi.number().integer().positive().messages
    ({
    'number.base': 'El ID debe ser un número.',
    'number.integer': 'El ID debe ser un número entero.', 
    'number.positive': 'El ID debe ser un número positivo.'
    })

const creationSchema = joi.object({
    nombre: joi.string().required().min(3).max(63).messages
        ({
        "any.required": "El campo nombre es requerido.",
        "string.min": "El nombre debe contener al menos 3 caracteres.",
        "string.max": "El nombre debe contener como maximo 63 caracteres."
        }),
    descripcion: joi.string().max(255).messages
        ({
        'string.base': 'La dirección debe ser una cadena de texto.',
        "string.max": "La descripcion no puede ser superior a 255"
        })
    })

const updateSchema = creationSchema.fork(['nombre', 'descripcion'], (field) => field.optional())

const componenteSchema = 
    {
    idSchema,
    creationSchema,
    updateSchema
    }

module.exports = componenteSchema