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
        let { nombre, direccion, telefono, descripcion, ubicacion, categoria } = req.body
        let existeCategoria = await Category.findOne({_id: categoria})

        if (!existeCategoria)
            return res.status(404).send({ message: 'The category not found' })


        const validacion = validar(nombre,direccion,telefono,descripcion,ubicacion,req.file,'Y')
        if(validacion == ''){
            const hotel = new Hotel({
                nombre: nombre,
                direccion: direccion,
                telefono: telefono,
                descripcion: descripcion,
                ubicacion: ubicacion,
                categoria: categoria,
                imagen: req.file.filename
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
        let categorys = await Category.find({})
        let hoteles = []
        
        await Promise.all(categorys.map(async (category) => {
            let hotelesAdd = await Hotel.find({ categoria: category.id })
            hotelesAdd = hotelesAdd.map(hotel => ({
                ...hotel.toObject(),
                nombreCategoria: category.name
            }))
            hoteles.push({
                titulo: category.name,
                hoteles: hotelesAdd
            })
        }))

        return res.send({ hoteles })
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

const validar = (nombre,direccion,telefono,descripcion,ubicacion,imagen,sevsalida) =>{
    var errors = []
    if(!nombre || nombre.trim() === ''){
        errors.push('El nombre NO debe de estar vacío')
    }
    if(!direccion || direccion.trim() === ''){
        errors.push('El direccion NO debe de estar vacío')
    }
    if(!telefono || telefono.trim() === ''){
        errors.push('El telefono NO debe de estar vacío')
    }
    if(!descripcion || descripcion.trim() === ''){
        errors.push('El descripcion NO debe de estar vacío')
    }
    if(!ubicacion || ubicacion.trim() === ''){
        errors.push('La ubicacion NO debe de estar vacío')
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

export const getImage = async(req, res)=>{
    const dirname = 'src/public/uploads/'
    const { image } = req.params
    try{

        const img = path.resolve(`${dirname}${image}`)
        return res.sendFile(img)
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error al obtener la imagen'})
    }
}

export const getHotelCategory = async(req, res)=>{
    try{
        const categorys = await Category.find({})
        categorys.map((category)=>{
            console.log('------------------------');
            console.log(category)
        })
        return  res.send({message: categorys})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error al obtener la imagen'})
    }
}