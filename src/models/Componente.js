'use strict'
const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => 
    {
    class Componente extends Model {
        static associate(models) {
            Componente.belongsToMany(models.Producto, {
                through: 'ProductoComponente',
                as: 'Productos',
                foreignKey: 'componenteId',
                otherKey: 'productoId'
             })
        }
     }

Componente.init
    ({
    nombre: {type: DataTypes.STRING,
            allowNull: false},
    descripcion: {type: DataTypes.STRING}}, 
    {
    sequelize,
    modelName: 'Componente',
    timestamps: false
    })
    return Componente;
};