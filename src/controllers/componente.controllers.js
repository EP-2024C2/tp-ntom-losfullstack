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
        response.status(401).json({message: 'Hubo un error al crear el componente', messageError: error})
        }
    }
componenteController.agregarComponente = agregarComponente

const updateComponente = async (req, res) => 
    {
    const id = req.params.id
    const {nombre, descripcion} = req.body
    try {
        const componente = await Componente.findByPk(id)
        if (!componente) 
            {
            return res.status(404).json({ error: `El ID ${id} no corresponde a ningún componente.`})
            }

        componente.nombre = nombre ?? componente.nombre
        componente.descripcion = descripcion ?? componente.descripcion
        
        await componente.save()
        res.status(202).json(componente)
        } 
    catch (error) 
        {
        res.status(505).json({ error: 'Error al modificar el componente.'})
        }
    }
componenteController.updateComponente = updateComponente

const deleteComponente = async (req, res) => 
    {
    const id = req.params.id
    try 
        {
        const componente = await Componente.findByPk(id)
        if (!componente) 
            {
            return res.status(404).json({ error: `El ID ${id} no corresponde a ningún componente.`})
            }
        await componente.destroy()
        res.status(200).json({ message: `Componente de ID ${id}, eliminado con éxito.`})
        }
    catch (error) 
        {
        res.status(500).json({ error: 'Error al eliminar el componente.'})
        }
    }
componenteController.deleteComponente = deleteComponente

const getProductosByComponente = async (req, res) => 
    {
    const id = req.params.id
    try 
        {
        const componente = await Componente.findByPk(id,
            {
            include: [{ model: Producto, as: 'Productos' }]
            })
        if (!componente) 
            {
            return res.status(404).json({error: `El ID ${id} no corresponde a ningún componente.`})
            }
        res.status(200).json(componente.productos);
        }
    catch (error) 
        {
        res.status(500).json({ error: 'Error obtener los productos del componente.'})
        }
    }
componenteController.getProductosByComponente = getProductosByComponente

module.exports = componenteController