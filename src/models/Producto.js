'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.belongsTo(models.Fabricante, {
        foreignKey: 'fabricanteId',
        as: 'Fabricantes'
      })
    }
  }

  Producto.init({
    nombre: DataTypes.STRING,
            allowNull: false, //Valido que el campo sea not null al crear
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT,
            allowNull: false, //Valido que el campo sea not null al crear
    pathImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};