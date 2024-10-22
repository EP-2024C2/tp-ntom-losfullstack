'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Componente extends Model {
    static associate(models) {
      Componente.belongsToMany(models.Producto, {
        through: 'ProductoComponente',
        foreignKey: 'componenteId',
        otherKey: 'productoId',
        as: 'Productos'
      });
    }
  }

  Componente.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Componente',
    timestamps: false
  });

  return Componente;
};
