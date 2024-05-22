'use strict'

import Habitacion from './Habitacion.model.js'
import CHabitacionModel from '../CategoriaHabitacion/CHabitacion.model.js'
import Hotel from '../Hoteles/Hotel.model.js'

export const testHabitacion = (req, res)=>{
    return res.send({message: 'Conexion a Habitacion'})
}

export const addHabitacion = async(req, res)=>{
    try{
        let data = req.body
        
        let existeCHabitacion = await CHabitacionModel.findOne({_id:data.cHabitacion})
        if(!existeCHabitacion) return res.status(404).send({message: 'The category not found'})
        let existeHotel = await Hotel.findOne({_id:data.hotel})
        if(!existeHotel) return res.status(404).send({message: 'The hotel not found'})

        let habitacion = new Habitacion(data)
        await habitacion.save()
        return res.send({message: 'saved room', habitacion})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const viewHabitacion = async(req, res)=>{
    try{
        let habitaciones = await Habitacion.find({})
        return res.send({message: habitaciones})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const updateHabitacion = async(req, res)=>{
    try{
        let { id } = req.params
        let existHabitacion = await Habitacion.findOne({_id:id})
        if(!existHabitacion) return res.status(500).send({message: 'The room not exist'})
        let data = req.body
        let habitacionUpdate = await Habitacion.findOneAndUpdate(
            {_id: id},
            data,
            {new: true})
        if(!habitacionUpdate) return res.status(401).send({message: 'The room could not be updated'}) 
        return res.send({message: 'Updated course', habitacionUpdate})
        
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const deleteHabitacion = async(req, res)=>{
    try{
        let { id } = req.params
        let existHabitacion = await Habitacion.findOne({_id:id})
        if(!existHabitacion) return res.status(500).send({message: 'The room not exist'})
        let habitacionDelte = await Habitacion.findOneAndDelete({_id: id})
        if(!habitacionDelte) return res.status(404).send({message: 'The room could not be deleted'})
        return res.send({message: `The room has been successfully removed`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}