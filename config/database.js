const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/fabrica.sqlite'
})

module.exports = sequelize