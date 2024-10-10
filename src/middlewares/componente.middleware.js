const {Componente} = require('../models')

const validateComponente = async (request, response, next) =>
    {
    const {id} = request.params
    const componente = await Componente.findByPk(id)
    if (componente)
        next()
    return response.status(404).json({mensaje: `El id ${id} del componente no existe`});  
}

module.exports = { validateComponente };