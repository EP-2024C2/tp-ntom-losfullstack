const express = require('express')
const routes  = require('./routes/index')
const sequelize = require('./config/config.json')
const db = require('./models')

const app = express()

app.use(express.json())

app.use(routes)

async function startDatabase(){
    try {
        await db.sequelize.sync({ force: false }) //Si ponemos en true se reiniciara la base de datos al inicar.
        console.log('Base de datos sincronizada')
    } catch (error) {
        console.log('Error al sicronizar o inicializar los datos')
    }
}
// start data base
startDatabase()


const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Ejecutando servidor en puerto ${PORT}`)
})

