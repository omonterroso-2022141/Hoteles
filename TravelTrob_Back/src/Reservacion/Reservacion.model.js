'use strict'

import mongoose, { Schema, model } from 'mongoose'

const reservacionSchema = Schema({
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFinalizacion: {
        type: Date,
        required: true
    },
    cantidadPersonas: {
        type: Number,
        required: true
    },
    detallesExtra: {
        type: String,
        required: true
    },
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        required: true
    },
    habitacion: {
        type: mongoose.Schema.ObjectId,
        ref: 'Habitacion',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
})

export default model('Reservacion', reservacionSchema)