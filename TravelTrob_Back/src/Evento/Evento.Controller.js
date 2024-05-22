import TipoEvento from '../TipoEvento/TipoEvento.Model.js'
import Evento from './Evento.Model.js'

export const testCHabitacion = (req, res) => {
    return res.send({ message: 'Conexion a CHabitacion' })
}

export const addEvento = async (req, res) => {
    try {
        let data = req.body

        let existTipoEvento = await TipoEvento.findOne({_id:data.tipoEvento})
        if(!existTipoEvento) return res.status(403).send({message: 'The type event not exist'})

        let evento = new Evento(data)
        await evento.save()
        return res.send({ message: 'save event', evento })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

export const viewEvento = async (req, res) => {
    try {
        let evento = await Evento.find({})
        return res.send({ evento })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

export const updateEvento = async (req, res) => {
    try {
        let { id } = req.params
        let existEvent = await Evento.findOne({ _id: id })
        if (!existEvent)
            return res
                .status(404)
                .send({ message: 'The event not exist' })
        let data = req.body
        let eventActualizado = await Evento.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        if (!eventActualizado)
            return res
                .status(401)
                .send({ message: 'The type event could not be updated' })
        return res.send({ message: 'Updated course', eventActualizado })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

//@ Modified By: Yerick Aguilar
export const deleteEvento = async (req, res) => {
    try {
        let { id } = req.params
        //# Validate If Exists
        let existeEvento = await Evento.findOne({ _id: id })
        if (!existeEvento)return res.status(404).send({ message: 'This Event Does Not Exists' })

        //# Delete CHabitacion
        let eventoDelete = await Evento.findOneAndDelete({ _id: id })
        if (!eventoDelete) return res.status(404).send({ message: 'Event Not Found, Not Deleted' })
        return res.send({message: `The event: has been successfully removed`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}