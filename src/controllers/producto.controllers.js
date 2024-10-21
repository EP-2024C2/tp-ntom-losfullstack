const { Fabricante, Producto, Componente } = require('../models/') 

const productoController = {};

const obtenerProductos = async (request, response) => {
    try {
        const productos = await Producto.findAll();
        return response.status(200).json(productos);
    } catch (error) {
        return response.status(500).json({message: 'Hubo un error al obtener los productos.', messageError: error})
    }
}
productoController.obtenerProductos = obtenerProductos;

const obtenerProductoById = async (request, response) => {
    const {id} = request.params;
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return response.status(404).json({ error: `El ID ${id} no corresponde a ningún producto.` });
        }        
        return response.status(200).json(producto);
    } catch (error) {
        return response.status(404).json({message: 'Hubo un error al obtener el producto', messageError: error});
    }
}
productoController.obtenerProductoById = obtenerProductoById;

const agregarProducto = async (request, response) => {
    const { nombre, descripcion, precio, pathImg } = request.body;
    try {
        const producto = await Producto.create({
            nombre,
            descripcion,
            precio,
            pathImg 
        })
        return response.status(201).json(producto);
    } catch (error) {
        return response.status(400).json({message: 'Hubo un error al crear producto', messageError: error});
    }
}
productoController.agregarProducto = agregarProducto;

const modificarProducto = async (request, response) => {
    const {id} = request.params;
    const {nombre, descripcion, precio, pathImg } = request.body;
    try {
        const obtenerProducto = await Producto.findByPk(id);
        if (!obtenerProducto) {
            return response.status(404).json({ error: `El ID ${id} no corresponde a ningún producto.`});
        }
        await Producto.update({
            nombre,
            descripcion,
            precio,
            pathImg
        },  
        {
            where: { id: obtenerProducto.id } 
        });
        const productoActualizado = await Producto.findByPk(id);
        return response.status(200).json(productoActualizado);
    } catch (error) {
        return response.status(404).json({message: 'Hubo un error al actualizar el producto', messageError: error});
    }
}
productoController.modificarProducto = modificarProducto;

const eliminarProducto = async (request, response) => {
    const {id} = request.params;
    try {
        const producto = await Producto.findByPk(id);
        if(!producto){
            response.status(404).json({message: 'El producto no existe'});
        }
        const fabricante = await Producto.findByPk(id, { include: 'Fabricantes' });
        if (fabricante && fabricante.Fabricantes && fabricante.Fabricantes.length > 0) {
            return response.status(400).json({ error: 'No se puede eliminar el producto porque tiene fabricantes asociados.' });
        }
        const componente = await Producto.findByPk(id, { include: 'Componentes' });
        if (componente && componente.Componentes && componente.Componentes.length > 0) {
            return response.status(400).json({ error: 'No se puede eliminar el producto porque tiene componentes asociados.' });
        }
        await producto.destroy()
        return response.status(200).json({message: `El producto fue con id: ${id} fue eliminado correctamente`})
    } catch (error) {
        return response.status(500).json({message: 'Hubo un error al eliminar el producto', messageError: error});
    }
}
productoController.eliminarProducto = eliminarProducto;

const crearProductoConFabricante =  async (request, response) => {
    const { id } = request.params;
    const { fabricanteIds } = request.body;
    try {
        const fabricantes = await Fabricante.findAll({where: {id: fabricanteIds}});
        if (!fabricantes) {
            return response.status(404).json({ error: `El ID ${fabricanteId} no corresponde a ningún fabricante.`});
        }
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return response.status(404).json({ error: `El ID ${id} no corresponde a ningún producto.`});
        }
        await producto.addFabricantes(fabricantes);
        return response.status(201).json({message: 'El fabricante fue asociado correctamente.', producto});
    } catch (error) {
        console.log(error);
        return response.status(400).json({message:'Hubo un error al asociar el fabribante con el producto.'});
    }
}

productoController.crearProductoConFabricante = crearProductoConFabricante;

const obtenerFabricantesDeProducto = async (request, response) => {
    const id = request.params.id
    try {
        const fabricantesDeProducto = await Producto.findByPk(id, {
            include: {
                model: Fabricante,
                as: 'Fabricantes',
                through: {
                    attributes: []
                },
                required: false
            }
        })
        if (!fabricantesDeProducto) {
            return response.status(404).json({ error: `El ID ${id} no corresponde a ningún producto.`})
        }
        return response.status(200).json(fabricantesDeProducto)
    } catch (error) {
        return response.status(500).json({ error: 'Error obtener los productos del fabricante.'})
    }
}
productoController.obtenerFabricantesDeProducto = obtenerFabricantesDeProducto;

const crearProductoConComponentes =  async (request, response) => {
    const { id } = request.params;
    const { componentesIds } = request.body;
    try {
        const componentes = await Componente.findAll({where: {id: componentesIds}});
        if (!componentes) {
            return response.status(404).json({ error: `El ID ${componentesIds} no corresponde a ningún componente.`});
        }
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return response.status(404).json({ error: `El ID ${id} no corresponde a ningún producto.`});
        }
        await producto.addComponentes(componentes);
        return response.status(201).json({message: 'El componente fue asociado correctamente.', producto});
    } catch (error) {
        return response.status(400).json({message:'Hubo un error al asociar el componente con el producto.'});
    }
}

productoController.crearProductoConComponentes = crearProductoConComponentes;

const obtenerComponentesDeProducto = async (request, response) => {
    const id = request.params.id
    try {
        const componentesDeProducto = await Producto.findByPk(id, {
            include: {
                model: Componente,
                as: 'Componentes',
                attributes: { exclude: ['componenteId'] },
                required: false
            }
        })
        if (!componentesDeProducto) {
            return response.status(404).json({ error: `El ID ${id} no corresponde a ningún producto.`})
        }
        return response.status(200).json(componentesDeProducto)
    } catch (error) {
        return response.status(500).json({ error: 'Error obtener los productos del componente.'})
    }
}
productoController.obtenerComponentesDeProducto = obtenerComponentesDeProducto;

module.exports = productoController;