'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {
      Producto.belongsToMany(models.Fabricante, {
        through: 'ProductoFabricante',
        foreignKey: 'productoId',
        otherKey: 'fabricanteId',
        as: 'Fabricantes'
      }),
      Producto.belongsToMany(models.Componente, {
        through: 'ProductoComponente', 
        as: 'Componentes',
        foreignKey: 'productoId',
        otherKey: 'componenteId'
      });
    }
  }

  Producto.init({
    nombre: {type: DataTypes.STRING,
            allowNull: false},
    descripcion:{type: DataTypes.STRING},
    precio: {type: DataTypes.FLOAT,
            allowNull: false}, 
    pathImg: {type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};