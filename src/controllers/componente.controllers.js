const { Producto, Componente } = require('../models/') 

const componenteController = {}

const obtenerComponentes = async (request, response) => 
    {
    try {
        const componentes = await Componente.findAll()
        response.status(200).json(componentes)
        } 
    catch (error) {
        response.status(500).json({message: 'Hubo un error al obtener los componentes.', messageError: error})
        }
    }
componenteController.obtenerComponentes = obtenerComponentes

const obtenerComponente = async (request, response) => 
    {
    const {id} = request.params
    try {
        const componente = await Componente.findByPk(id)
        response.status(200).json(componente)
        } 
    catch (error) {
        response.status(404).json({message: 'Hubo un error al obtener el componente', messageError: error})
        }
}
componenteController.obtenerComponente = obtenerComponente;

const agregarComponente = async (request, response) => 
    {
    const {nombre, descripcion} = request.body
    try {
        const componente = await Componente.create
            ({
            nombre,
            descripcion
            })
        response.status(201).json(componente)
        }
    catch (error){
        response.status(401).json({message: 'Hubo un error al crear el componente', messageError: error})
        }
    }
componenteController.agregarComponente = agregarComponente

const actualizarComponente = async (request, response) => 
    {
    const id = request.params.id
    const {nombre, descripcion} = request.body
    try {
        const componente = await Componente.findByPk(id)
        if (!componente) {
            return response.status(404).json({ error: `El ID ${id} no corresponde a ningún componente.`})
            }

        componente.nombre = nombre ?? componente.nombre
        componente.descripcion = descripcion ?? componente.descripcion
        
        await componente.save()
        response.status(202).json(componente)
        } 
    catch (error) {
        response.status(505).json({ error: 'Error al modificar el componente.'})
        }
    }
componenteController.actualizarComponente = actualizarComponente

const borrarComponente = async (request, response) => 
    {
    const id = request.params.id
    try {
            const componente = await Componente.findByPk(id)
            if (!componente) {
                return response.status(404).json({ error: `El ID ${id} no corresponde a ningún componente.`})
            }
            const producto = await Componente.findByPk(id, { include: 'Productos' });
            if (producto && producto.Productos && producto.Productos.length > 0) {
                return response.status(400).json({ error: 'No se puede eliminar el componente porque tiene productos asociados.' });
            }
            await componente.destroy()
            response.status(200).json({ message: `Componente de ID ${id}, eliminado con éxito.`})
        }
    catch (error) {
        response.status(500).json({ error: 'Error al eliminar el componente.'})
        }
    }
componenteController.borrarComponente = borrarComponente

const obtenerProductosDeComponente = async (request, response) => 
    {
    const id = request.params.id
    try {
        const componente = await Componente.findByPk(id,{
            include: [{ model: Producto,
                        as: 'Productos', 
                        attributes: { exclude: ['productoId'] },
                        requestuired: false}]
            })
        if (!componente) {
            return response.status(404).json({error: `El ID ${id} no corresponde a ningún componente.`})
            }
            response.status(200).json(componente);
        }
    catch (error) {
        response.status(500).json({ error: 'Error obtener los productos del componente.'})
        }
    }
componenteController.obtenerProductosDeComponente = obtenerProductosDeComponente

module.exports = componenteController