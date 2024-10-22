const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajusta el path
const ProductoModel = require('./Producto');
const FabricanteModel = require('./Fabricante');
const ComponenteModel = require('./Componente');

const Producto = ProductoModel(sequelize, DataTypes);
const Fabricante = FabricanteModel(sequelize, DataTypes);
const Componente = ComponenteModel(sequelize, DataTypes);

Producto.belongsToMany(Fabricante, { 
    through: 'ProductoFabricante', 
    foreignKey: 'productoId', 
    otherKey: 'fabricanteId', 
    as: 'Fabricantes' 
});

Fabricante.belongsToMany(Producto, { 
    through: 'ProductoFabricante', 
    foreignKey: 'fabricanteId', 
    otherKey: 'productoId', 
    as: 'Productos' 
});


Producto.belongsToMany(Componente, { 
    through: 'ProductoComponente', 
    foreignKey: 'productoId', 
    otherKey: 'componenteId', 
    as: 'Componentes' 
});

Componente.belongsToMany(Producto, { 
    through: 'ProductoComponente', 
    foreignKey: 'componenteId', 
    otherKey: 'productoId', 
    as: 'Productos' 
});

module.exports = {
    Producto,
    Fabricante,
    Componente
};
