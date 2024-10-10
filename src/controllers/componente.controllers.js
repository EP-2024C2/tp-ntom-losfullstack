const {Componente} = require('../models')

const componenteController = {}

const obtenerComponentes = async (request, response) => 
    {
    try 
        {
        const componentes = await Componente.findAll()
        response.status(200).json(componentes)
        } 
    catch (error) 
        {
        response.status(500).json({message: 'Hubo un error al obtener los componentes.', messageError: error})
        }
    }
componenteController.obtenerComponentes = obtenerComponentes

const obtenerComponenteById = async (request, response) => 
    {
    const {id} = request.params
    try 
        {
        const componente = await Componente.findByPk(id)
        response.status(200).json(componente)
        } 
    catch (error) 
        {
        response.status(404).json({message: 'Hubo un error al obtener el componente', messageError: error})
        }
}
componenteController.obtenerComponenteById = obtenerComponenteById;

const agregarComponente = async (request, response) => 
    {
    const {nombre, descripcion} = request.body
    try 
        {
        const componente = await Componente.create
            ({
            nombre,
            descripcion
            })
        response.status(201).json(componente)
        }
    catch (error)
        {
        response.status(401).json({message: 'Hubo un error al crear componente', messageError: error})
        }
    }
componenteController.agregarComponente = agregarComponente

module.exports = componenteController