'use strict'

import mongoose, { Schema, model } from 'mongoose'

const hotelSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
        miniLength: [8, 'Telefono de 8 digitos como maximo'],
    },
    descripcion: {
        type: String,
        required: true,
    },
    ubicacion: {
        type: String,
        required: true,
    },
    imagen:{
        type: String,
        required: true,
        default: ''
    },
    categoria: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true,
    },
    favorito: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
        },
    ],
})

export default model('Hotel', hotelSchema)
