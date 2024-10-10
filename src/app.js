console.log(`Trabajo Practico de Estrategias de Persistencia.....`)

const express = require('express')
const route = require('./routes/fabricante.routes')
const sequelize = require('../config/database')

const app = express()

app.use(express.json())
app.use(route)

'http://localhost:3000/'

sequelize.sync()

const PORT = 3000
app.listen(PORT)