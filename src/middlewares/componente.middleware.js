const componenteSchema = require('../schemas/componente.schema')

const validateComponente = async (request, response, next) =>
    {
    const {error} = componenteSchema.idSchema.validate(request.params.id)
    if (error) 
        {
        return response.status(400).json({error: error})
        }
    next()
    }

module.exports = {validateComponente}