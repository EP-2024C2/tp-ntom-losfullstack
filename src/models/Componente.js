'use strict'
const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => 
    {
    class Componente extends Model {
        static associate(models) {
            Componente.belongsTo(models.Producto, {
                foreignKey: 'productoId',
                as: 'Productos'
             })
        }
     }

Componente.init
    ({
    nombre: DataTypes.STRING,
            allowNull: false,
    descripcion: DataTypes.STRING
    }, 
    {
    sequelize,
    modelName: 'Componente'
    })
    return Componente;
};