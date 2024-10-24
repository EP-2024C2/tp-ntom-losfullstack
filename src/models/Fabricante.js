'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fabricante extends Model {
    static associate(models) {
      Fabricante.belongsToMany(models.Producto, {
        through: 'ProductoFabricante',
        foreignKey: 'fabricanteId',
        otherKey: 'productoId',
        as: 'Productos'
      });
    }
  }

  Fabricante.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numeroContacto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pathImg: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Fabricante',
    timestamps: false
  });

  return Fabricante;
};
