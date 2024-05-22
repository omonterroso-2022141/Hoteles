'use strict'

import { Schema, model } from 'mongoose'

const tipoEventoSchema = Schema({
    nombre: {
        type: String,
        required: true
    }
})

export default model('TipoEvento', tipoEventoSchema)