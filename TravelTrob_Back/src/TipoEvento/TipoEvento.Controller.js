'use strict'

import TipoEvento from './TipoEvento.Model.js'
import Evento from '../Evento/Evento.Model.js'

export const testCHabitacion = (req, res) => {
    return res.send({ message: 'Conexion a CHabitacion' })
}

export const tipoEventoDefault = async (req, res) => {
    try {
        let existe = await TipoEvento.findOne({ nombre: 'Default' })
        if (!existe) {
            let data = {
                nombre: 'Default'
            }
            let tipoEvento = new TipoEvento(data)
            await tipoEvento.save()
            console.log('Type Evente Default Create')
        }
        console.log('Type Evente already exists')
    } catch (err) {
        console.error(err)
        return res
            .status(500)
            .send({ message: 'Error course could not be added', err })
    }
}

export const addTipoEvento = async (req, res) => {
    try {
        let data = req.body
        let tipoEvento = new TipoEvento(data)
        await tipoEvento.save()
        return res.send({ message: 'save tipo evento', tipoEvento })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

export const viewTipoEvento = async (req, res) => {
    try {
        let tipoEvento = await TipoEvento.find({})
        return res.send({ tipoEvento })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

export const updateTipoEvento = async (req, res) => {
    try {
        let { id } = req.params
        let existTipoEvento = await TipoEvento.findOne({ _id: id })
        if (!existTipoEvento)
            return res
                .status(404)
                .send({ message: 'The type event not exist' })
        let data = req.body
        let tipoEventActualizado = await TipoEvento.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        if (!tipoEventActualizado)
            return res
                .status(401)
                .send({ message: 'The type event could not be updated' })
        return res.send({ message: 'Updated course', tipoEventActualizado })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

//@ Modified By: Yerick Aguilar
export const deleteTipoEvento = async (req, res) => {
    try {
        let { id } = req.params
        //# Validate If Exists
        let existeTipoEvento = await TipoEvento.findOne({ _id: id })
        if (!existeTipoEvento)return res.status(404).send({ message: 'This Category Does Not Exists' })

            //# Update CHabitacion To: 'Default'
        const defaultTipoEvento = await TipoEvento.findOne({Nombre: 'Default'})
        await Evento.updateMany({cHabitacion: id}, {cHabitacion: defaultTipoEvento._id})

        //# Delete CHabitacion
        let tipoEventoDelete = await TipoEvento.findOneAndDelete({ _id: id })
        if (!tipoEventoDelete)return res.status(404).send({ message: 'Category Not Found, Not Deleted' })
        return res.send({message: `The type event: ${tipoEventoDelete.nombre} has been successfully removed`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}
