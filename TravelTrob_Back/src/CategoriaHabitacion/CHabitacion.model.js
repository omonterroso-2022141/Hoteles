'use strict'

import { Schema, model } from 'mongoose'

const categoriaHabitacionSchema = Schema({
    Nombre: {
        type: String,
        required: true
    },
    Contenido: {
        type: String,
        required: true
    }
})

export default model('CHabitacion', categoriaHabitacionSchema)