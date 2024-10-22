const express = require('express')
const routes  = require('./routes/index')
const sequelize = require('./config/database')
require('dotenv').config();

const PORT = process.env.PORT;

const app = express()

app.use(express.json())

app.use(routes)

async function startDatabase(){
    try {
        await sequelize.sync({ force: false })
        console.log('Base de datos sincronizada')
    } catch (error) {
        console.log(error);
        console.log('Error al sicronizar o inicializar los datos')
    }
}
startDatabase()


app.listen(PORT, ()=>{
    console.log(`Ejecutando servidor en puerto ${PORT}`)
})

