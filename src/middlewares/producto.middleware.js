const {Producto} = require('../models')

const validateProducto = async (request,response,next) =>{
    const {id} = request.params;
    const producto = await Producto.findByPk(id);
    if (!producto){
        return response.status(404).json({mensaje: `El id ${id} del producto no existe`});
    }
    next();
     
}

module.exports = { validateProducto };