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
        const fabricante = Fabricante.findByPK(id)
        if (!fabricante) {
            res.status(404).json({ error: 'Fabricante no encontrado'})
        }
        res.status(200).json(fabricante)

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






module.exports = fabricanteController
