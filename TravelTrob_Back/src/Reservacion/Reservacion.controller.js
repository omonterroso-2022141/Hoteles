import Habitacion from '../Habitaciones/Habitacion.model.js'
import Hotel from '../Hoteles/Hotel.model.js'
import User from '../User/User.model.js'
import { formatDate, obtenerFechaActual } from '../Utils/Validator.js'
import { enviarCorreo } from '../Utils/enviarCorreo.js'
import Reservacion from './Reservacion.model.js'

export const testReservacion = (req, res)=>{
    return res.send({message: 'Conexion a Reservacion'})
}


export const addReservacion = async(req, res)=>{
    try{
        let data = req.body
        let { id } = req.user
        
        let existeUser = await User.findOne({_id:id})
        if(!existeUser) return res.status(404).send({message: 'The User not found'})
        data.user = id

        let existeHotel = await Hotel.findOne({_id:data.hotel})
        if(!existeHotel) return res.status(404).send({message: 'The Hotel not found'})

        let existeHabitacion = await Habitacion.findOne({_id:data.habitacion})
        if(!existeHabitacion) return res.status(404).send({message: 'The Habitacion not found'})
        
        let reservacion = new Reservacion(data)
        /*await reservacion.save()
        setReservacion(existeUser, existeHotel, existeHabitacion, reservacion)
        */
        let fechaActual = obtenerFechaActual()
        if(fechaActual>=data.fechaInicio || fechaActual>= fechaFinalizacion)
            return res.status(400).send({message: 'You cannot request past days'})
        else if(data.fechaFinalizacion<data.fechaInicio)
            return res.status(400).send({message: 'Logically, you cannot request a start date after the end date, please try again.'})
        else if(data.fechaFinalizacion==data.fechaInicio)
            return res.status(400).send({message: 'You cannot request a room that starts and ends on the same day'})
        
        return res.send({message: 'saved reservation', reservacion})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: err})
    }
}

const setReservacion = async(existeUser, existeHotel, existeHabitacion, reservacion)=>{
    try{
        let data = {//'incmonster365@gmail.com'
            correoEnviar: existeUser.email, 
            fechaInicio: formatDate(reservacion.fechaInicio), 
            fechaCierre: formatDate(reservacion.fechaFinalizacion), 
            hotel: existeHotel.nombre, 
            cantidadPersonas: reservacion.cantidadPersonas, 
            habitacion: existeHabitacion.descripcion, 
            dataExtra: reservacion.detallesExtra
        }
        enviarCorreo(data)
        return true
    }catch(err){
        console.error(err)
        return false
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

