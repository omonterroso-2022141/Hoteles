'use strict'

import mongoose, { Schema, model } from 'mongoose'

const tipoEventoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        required: true
    }
})

export default model('TipoEvento', tipoEventoSchema)