const {Producto} = require('../models');
const {Fabricante} = require('../models');

const productoController = {};

const obtenerProductos = async (request, response) => {
    try {
        const productos = await Producto.findAll();
        response.status(200).json(productos);
    } catch (error) {
        response.status(500).json({message: 'Hubo un error al obtener los productos.', messageError: error})
    }
}
productoController.obtenerProductos = obtenerProductos;

const obtenerProductoById = async (request, response) => {
    const {id} = request.params;
    try {
        const producto = await Producto.findByPk(id);
        response.status(200).json(producto);
    } catch (error) {
        response.status(404).json({message: 'Hubo un error al obtener el producto', messageError: error});
    }
}
productoController.obtenerProductoById = obtenerProductoById;

const agregarProducto = async (request, response) => {
    const {nombre, descripcion, precio, pathImg, fabricanteId } = request.body;
    try {
        const fabricante = await Fabricante.findByPk(fabricanteId);
        if (!fabricante) {
            return response.status(404).json({ error: `El ID ${fabricanteId} no corresponde a ningún fabricante.`});
        }

        const producto = await Producto.create({
            nombre,
            descripcion,
            precio,
            pathImg,
            fabricanteId 
        })
        response.status(201).json(producto);
    } catch (error) {
        response.status(401).json({message: 'Hubo un error al crear producto', messageError: error});
    }
}
productoController.agregarProducto = agregarProducto;

const modificarProducto = async (request, response) => {
    const {id, nombre, descripcion, precio, pathImg, fabricanteId } = request.body;
    try {
        const fabricante = await Fabricante.findByPk(fabricanteId);
        if (!fabricante) {
            return response.status(404).json({ error: `El ID ${fabricanteId} no corresponde a ningún fabricante.`});
        }
        const obtenerProducto = await Producto.findByPk(id);
        if (!producto) {
            return response.status(404).json({ error: `El ID ${id} no corresponde a ningún producto.`});
        }
        const producto = await Producto.update({
            nombre,
            descripcion,
            precio,
            pathImg,
            fabricanteId
        },  
        {
            where: { id: obtenerProducto.id } 
        });
        const productoActualizado = await Producto.findByPk(id);
        response.status(200).json(productoActualizado);
    } catch (error) {
        response.status(404).json({message: 'Hubo un error al actualizar el producto', messageError: error});
    }
}
productoController.modificarProducto = modificarProducto;

const eliminarProducto = async (request, response) => {
    const {id} = request.body;
    try {
        const producto = await Producto.findByPk(id);
        if(!producto){
            response.status(404).json({message: 'El producto no existe'});
        }
        await producto.destroy()
        response.status(200).json({message: `El producto fue con id: ${id} fue eliminado correctamente`})
    } catch (error) {
        response.status(500).json({message: 'Hubo un error al eliminar el producto', messageError: error});
    }
}
productoController.eliminarProducto = eliminarProducto;

const crearProductoConFabricante =  async (request, response) => {
    const { id } = request.params;
    const { fabricanteIds } = request.body;
    try {
        const fabricantes = await Fabricante.findAll({where: {id: fabricanteIds}});
        if (!fabricante) {
            return response.status(404).json({ error: `El ID ${fabricanteId} no corresponde a ningún fabricante.`});
        }
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return response.status(404).json({ error: `El ID ${id} no corresponde a ningún producto.`});
        }
        await producto.addFabricantes(fabricantes);
        response.status(201).json({message: 'El fabricante fue asociado correctamente.', producto});
    } catch (error) {
        response.status(400).json({message:'Hubo un error al asociar el fabribante con el producot.'});
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
                attributes: { exclude: ['fabricanteId'] },
                required: false
            }
        })
        if (!fabricantesDeProducto) {
            return response.status(404).json({ error: `El ID ${id} no corresponde a ningún producto.`})
        }
        response.status(200).json(fabricantesDeProducto)
    } catch (error) {
        response.status(500).json({ error: 'Error obtener los productos del fabricante.'})
    }
}
productoController.obtenerFabricantesDeProducto = obtenerFabricantesDeProducto

module.exports = productoController;