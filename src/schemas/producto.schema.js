const joi = require("joi")

const productoSchemas = joi.object().keys(
    {
        nombre: joi.string().required().min(3).max(255).messages({
            "any.required": "El campo nombre es requerido.",
            "string.min": "El nombre debe contener al menos 3 caracteres.",
            "string.max": "El nombre debe contener como maximo 255 caracteres."
        }), 
        descripcion: joi.string().max(255).messages({
            "string.max": "La descripcion no puede ser superior a 255",
        }),
        precio: joi.number().required().min(1).max(25).messages({
            "any.required": "El precio es requerido.",
            "number.min": "El precio debe contener al menos 1.",
            "number.max": "El precio debe contener como maximo 15."
        }),
        pathImage: joi.string().max(255).messages({
            "string.max": "La imagen no puede ser superior a 255",
        }),
    }
) 

module.exports = productoSchemas;