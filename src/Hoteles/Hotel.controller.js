'use strict'

import Hotel from './Hotel.model.js'
import { eliminarEspacios } from '../utils/apoyo.js'

export const testHotel = (req, res)=>{
    return res.send({message: 'Conexion a Hotel'})
}

export const addHotel = async(req, res)=>{
    try{
        let data = req.body
        if(
            !data.nombre || data.nombre == '',
            !data.direccion || data.direccion == '',
            !data.telefono || data.telefono == '',
            !data.descripcion || data.descripcion == '',
            !data.categoria || data.categoria == ''
        ) return res.status(500).send({message: 'Error'})
        
        //let existeCategoria = await Categoria.finOne({name:data.categoria})
        //if(!existeCategoria) return res.status(500).send({message: 'Error'})

        let hotel = new Hotel(eliminarEspacios(data))
        //await hotel.save()
        return res.send({message: 'saved hotel', hotel})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const viewHotel = async(req, res)=>{
    try{
        let hoteles = await Hotel.find({})
        return res.send({message: hoteles})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const updateHotel = async(req, res)=>{
    try{
        let { id } = req.params
        let existHotel = await Hotel.findOne({_id:id})
        if(!existHotel) return res.status(500).send({message: 'The Hotel not exist'})
        let data = req.body
        let hotelUpdate = await Hotel.findOneAndUpdate(
            {_id: id},
            data,
            {new: true})
        if(!hotelUpdate) return res.status(401).send({message: 'The Hotel could not be updated'}) 
        return res.send({message: 'Updated course', hotelUpdate})
        
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const deleteHotel = async(req, res)=>{
    try{
        let { id } = req.params
        let existHotel = await Hotel.findOne({_id:id})
        if(!existHotel) return res.status(500).send({message: 'The Hotel not exist'})
        let hotelDelte = await Hotel.findOneAndDelete({_id: id})
        if(!hotelDelte) return res.status(404).send({message: 'The hotel could not be deleted'})
        return res.send({message: `The hotel: ${hotelDelte.nombre} has been successfully removed`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}