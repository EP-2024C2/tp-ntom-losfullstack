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

module.exports = productoController;