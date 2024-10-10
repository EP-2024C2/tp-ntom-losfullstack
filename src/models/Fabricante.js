const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

class Fabricante extends Model {}

Fabricante.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false},
    direccion:{
        type: DataTypes.STRING,
        allowNull: false},
    numeroContacto: {
        type: DataTypes.STRING,
        allowNull: false},
    pathImgPerfil: DataTypes.STRING
}, {
    sequelize,
    modelName: 'fabricante'
})

module.exports = Fabricante