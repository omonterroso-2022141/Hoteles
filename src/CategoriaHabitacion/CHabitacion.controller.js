'use strict'

import CHabitacion from './CHabitacion.model.js'
import { eliminarEspacios } from '../utils/apoyo.js'

export const testCHabitacion = (req, res)=>{
    return res.send({message: 'Conexion a CHabitacion'})
}

export const addCHabitacion = async(req, res)=>{
    try{
        let data = req.body
        //Validacion si hay vacios o nulos
        //if() return res.status(500).send({message: 'Error'})
        
        let cHabitacion = new CHabitacion(eliminarEspacios(data))
        await cHabitacion.save()
        return res.send({message: 'saved category room', cHabitacion})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const viewCHabitacion = async(req, res)=>{
    try{
        let cHabitaciones = await CHabitacion.find({})
        return res.send({message: cHabitaciones})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const updateCHabitacion = async(req, res)=>{
    try{
        let { id } = req.params
        let existCHabitacion = await CHabitacion.findOne({_id:id})
        if(!existCHabitacion) return res.status(500).send({message: 'The category room not exist'})
        let data = req.body
        let cHabitacionUpdate = await CHabitacion.findOneAndUpdate(
            {_id: id},
            data,
            {new: true})
        if(!cHabitacionUpdate) return res.status(401).send({message: 'The category room could not be updated'}) 
        return res.send({message: 'Updated course', cHabitacionUpdate})
        
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const deleteCHabitacion = async(req, res)=>{
    try{
        let { id } = req.params
        let existCHabitacion = await CHabitacion.findOne({_id:id})
        if(!existCHabitacion) return res.status(500).send({message: 'The category room not exist'})
        let cHabitacionDelte = await CHabitacion.findOneAndDelete({_id: id})
        if(!cHabitacionDelte) return res.status(404).send({message: 'The category room could not be deleted'})
        return res.send({message: `The category room: ${cHabitacionDelte.nombre} has been successfully removed`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}