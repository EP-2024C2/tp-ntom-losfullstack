const { Sequelize } = require('sequelize');
require('dotenv').config();
console.log(require('dotenv').config());
const DIALECT = process.env.DB_DIALECT;
const LOCALHOST = process.env.DB_HOST;
const DBNAME = process.env.DB_NAME;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD || ''; 

// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: './data/fabrica.sqlite'
// })
const sequelize = new Sequelize(DBNAME, USER, PASSWORD,{
    dialect: DIALECT,
    host: LOCALHOST
})

module.exports = sequelize