const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/empresa.sqlite'
})

module.exports = sequelize