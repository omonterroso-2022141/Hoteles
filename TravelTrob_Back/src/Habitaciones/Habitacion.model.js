'use strict'

import mongoose, { Schema, model } from 'mongoose'

const habitacionSchema = Schema({
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        required: true
    },
    disponibilidad: {
        type: Boolean,
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
    cHabitacion: {
        type: mongoose.Schema.ObjectId,
        ref: 'CHabitacion',
        required: true
    },
    precio: {
        type: String,
        required: true
    },

})

export default model('Habitacion', habitacionSchema)