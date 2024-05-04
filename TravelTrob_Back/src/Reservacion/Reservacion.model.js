'use strict'

import mongoose, { Schema, model } from 'mongoose'

const reservacionSchema = Schema({
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFinalización: {
        type: Date,
        required: true
    },
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        required: true
    },
    cantidadPersonas: {
        type: Number,
        required: true
    },
    habitacion: {
        type: mongoose.Schema.ObjectId,
        ref: 'Habitacion',
        required: true
    }

})

export default model('Reservacion', reservacionSchema)