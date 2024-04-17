'use strict'

import mongoose, { Schema, model } from 'mongoose'

const hotelSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true,
        miniLength: [8, 'Telefono de 8 digitos como maximo']
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: mongoose.Schema.ObjectId,
        ref: 'Categoria',
        required: true
    },
    favorito: [{
        type: mongoose.Schema.ObjectId,
        required: true
    }],

})

export default model('Hotel', hotelSchema)