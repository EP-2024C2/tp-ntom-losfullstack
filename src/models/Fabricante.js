const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

class Fabricante extends Model {}

Fabricante.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    numeroContacto: DataTypes.STRING,
    pathImgPerfil: DataTypes.STRING
}, {
    sequelize,
    modelName: 'fabricante'
})

module.exports = Fabricante