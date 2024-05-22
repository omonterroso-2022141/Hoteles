'use strict'

import mongoose, { Schema, model } from 'mongoose'

const eventoSchema = Schema({
    fecha: {
        type: Date,
        required: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    hora:{
        type: String,
        required: true
    },
    info:{
        type: String,
        required: true
    },
    tipoEvento: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})

export default model('Evento', eventoSchema)