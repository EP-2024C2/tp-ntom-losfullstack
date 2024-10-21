'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Fabricante extends Model {
        static associate(models) {
            Fabricante.belongsToMany(models.Producto, {
                through: 'ProductoFabricante',
                as: 'Productos',
                foreignKey: 'fabricanteId',
                otherKey: 'productoId'
            });
        }
    }

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
        modelName: 'Fabricante',
        timestamps: false
    });

    return Fabricante;
};
