const Fabricante  = require('../models/Fabricante')
const fabricanteController = {}



const getFabricantes = async (req, res) => {
    try {
        const fabricantes = await Fabricante.findAll()
        res.status(200).json(fabricantes)

    } catch (error) {
        res.status(500).json({ error: "Error al obtener los fabricantes" });
    }
}
fabricanteController.getFabricantes = getFabricantes



const getFabricante = async (req, res) => {
    const id = req.params.id

    try {
        const fabricante = await Fabricante.findByPk(id)
        if (!fabricante) {
            return res.status(404).json({ error: `El ID ${id} no corresponde a ningún fabricante`})
        }
        return res.status(200).json(fabricante)

    } catch (error) {
        res.status(505).json({ error: 'Error al obtener el fabricante'})
    }
}
fabricanteController.getFabricante = getFabricante



const addFabricante = async (req, res) => {
    const { nombre, direccion, numeroContacto, pathImgPerfil } = req.body
    
    try {
        const fabricante = await Fabricante.create({
            nombre,
            direccion,
            numeroContacto,
            pathImgPerfil
        })
        res.status(202).json(fabricante)

    } catch (error) {
        res.status(505).json({ error: 'Error al crear el fabricante'})
    }
}
fabricanteController.addFabricante = addFabricante



const updateFabricante = async (req, res) => {
    const id = req.params.id
    const { nombre, direccion, numeroContacto, pathImgPerfil } = req.body

    try {
        const fabricante = await Fabricante.findByPk(id)
        if (!fabricante) {
            return res.status(404).json({ error: `El ID ${id} no corresponde a ningún fabricante`})
        }

        fabricante.nombre = nombre ?? fabricante.nombre
        fabricante.direccion = direccion ?? fabricante.direccion
        fabricante.numeroContacto = numeroContacto ?? fabricante.numeroContacto
        fabricante.pathImgPerfil = pathImgPerfil ?? fabricante.pathImgPerfil
        
        await fabricante.save()
        return res.status(202).json(fabricante)

    } catch (error) {
        res.status(505).json({ error: 'Error al modificar el fabricante'})
    }
}
fabricanteController.updateFabricante = updateFabricante



module.exports = fabricanteController
