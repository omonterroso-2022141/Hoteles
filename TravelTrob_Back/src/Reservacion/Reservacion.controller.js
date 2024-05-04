import Habitacion from '../Habitaciones/Habitacion.model.js'
import Hotel from '../Hoteles/Hotel.model.js'
import Reservacion from './Reservacion.model.js'

export const testReservacion = (req, res)=>{
    return res.send({message: 'Conexion a Reservacion'})
}


export const addReservacion = async(req, res)=>{
    try{
        let data = req.body
        
        let existeHotel = await Hotel.findOne({_id:data.hotel})
        if(!existeHotel) return res.status(404).send({message: 'The Hotel not found'})

        let existeHabitacion = await Habitacion.findOne({_id:data.habitacion})
        if(!existeHabitacion) return res.status(404).send({message: 'The Habitacion not found'})

        let reservacion = new Reservacion(data)
        await reservacion.save()
        return res.send({message: 'saved reservation', reservacion})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const viewReservacion = async(req, res)=>{
    try{
        let reservaciones = await Reservacion.find({})
        return res.send({message: reservaciones})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const updateReservacion = async(req, res)=>{
    try{
        let { id } = req.params
        let existReservacion = await Reservacion.findOne({_id:id})
        if(!existReservacion) return res.status(404).send({message: 'The Reservation not exist'})
        let data = req.body
        let ReservacionUpdate = await Reservacion.findOneAndUpdate(
            {_id: id},
            data,
            {new: true})
        if(!ReservacionUpdate) return res.status(401).send({message: 'The Reservation could not be updated'}) 
        return res.send({message: 'Updated course', ReservacionUpdate})
        
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

export const deleteReservacion = async(req, res)=>{
    try{
        let { id } = req.params
        let existReservacion = await Reservacion.findOne({_id:id})
        if(!existReservacion) return res.status(500).send({message: 'The Reservation not exist'})
        let reservacionDelete = await Reservacion.findOneAndDelete({_id: id})
        if(!reservacionDelete) return res.status(404).send({message: 'The Reservation could not be deleted'})
        return res.send({message: `The Reservation: ${reservacionDelete._id} has been successfully removed`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}