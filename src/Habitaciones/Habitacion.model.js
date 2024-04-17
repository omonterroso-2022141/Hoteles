'use strict'

import mongoose, { Schema, model } from 'mongoose'

const habitacionSchema = Schema({
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        required: true
    },
    disponibilidad: {
        type: String,
        required: true
    },
    numeroCuarto: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoriaHabitacion: {
        type: mongoose.Schema.ObjectId,
        ref: 'CategoriaHabitacion',
        required: true
    },
    precio: {
        type: String,
        required: true
    },

})

export default model('Habitacion', habitacionSchema)