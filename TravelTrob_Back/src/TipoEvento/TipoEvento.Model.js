'use strict'

import mongoose, { Schema, model } from 'mongoose'

const tipoEventoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    hotel: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})

export default model('TipoEvento', tipoEventoSchema)