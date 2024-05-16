'use strict'
import path from 'path'
import fs from 'fs'
import Hotel from './Hotel.model.js'
import Category from '../Category/Category.model.js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const uploadDir = path.join(__dirname, '../src/public/uploads')

export const testHotel = (req, res) => {
    return res.send({ message: 'Conexion a Hotel' })
}

export const addHotel = async (req, res) => {
    try {
        let { nombre, direccion, telefono, descripcion, categoria } = req.body
        let existeCategoria = await Category.findOne({_id: categoria})

        if (!existeCategoria)
            return res.status(404).send({ message: 'The category not found' })

        const validacion = validar(nombre,direccion,telefono,descripcion,req.file,'Y')
        if(validacion == ''){
            const hotel = new Hotel({
                nombre: nombre,
                direccion: direccion,
                telefono: telefono,
                descripcion: descripcion,
                categoria: categoria,
                imagen: '../src/public/uploads/'+req.file.filename
            })
            await hotel.save()
            return res.send({ message: 'saved hotel', hotel })
        }
        return res.status(500).send({ message: 'Error In Saved Hotel',validacion})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

export const viewHotel = async (req, res) => {
    try {
        let hoteles = await Hotel.find({})
        return res.send({ message: hoteles })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

export const updateHotel = async (req, res) => {
    try {
        let { id } = req.params
        let existHotel = await Hotel.findOne({ _id: id })
        if (!existHotel)
            return res.status(500).send({ message: 'The Hotel not exist' })
        let data = req.body
        let hotelUpdate = await Hotel.findOneAndUpdate({ _id: id }, data, {
            new: true,
        })
        if (!hotelUpdate)
            return res
                .status(401)
                .send({ message: 'The Hotel could not be updated' })
        return res.send({ message: 'Updated course', hotelUpdate })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

export const deleteHotel = async (req, res) => {
    try {
        let { id } = req.params
        let existHotel = await Hotel.findOne({ _id: id })
        if (!existHotel)
            return res.status(500).send({ message: 'The Hotel not exist' })
        let hotelDelte = await Hotel.findOneAndDelete({ _id: id })
        if (!hotelDelte)
            return res
                .status(404)
                .send({ message: 'The hotel could not be deleted' })
        return res.send({
            message: `The hotel: ${hotelDelte.nombre} has been successfully removed`,
        })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

const validar = (nombre,direccion,telefono,descripcion,imagen,sevsalida) =>{
    var errors = []
    if(!nombre || nombre.trim() === ''){
        errors.push('El nombre NO debe de estar vacío')
    }
    if(!direccion || direccion.trim() === ''){
        errors.push('El nombre NO debe de estar vacío')
    }
    if(!telefono || telefono.trim() === ''){
        errors.push('El nombre NO debe de estar vacío')
    }
    if(!descripcion || descripcion.trim() === ''){
        errors.push('El nombre NO debe de estar vacío')
    }
    if(sevsalida === 'Y' && !imagen){
        errors.push('Selecciona una imagen en formato jpg o png')
    }else{
        if (errors.length === 0) {
            let filePath = path.join(uploadDir, imagen.filename);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                return ''
            }
        }
    }
    return errors
}