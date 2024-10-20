'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {1
    static associate(models) {
      Producto.belongsTo(models.Fabricante, {
        foreignKey: 'fabricanteId',
        as: 'Fabricantes'
      })
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