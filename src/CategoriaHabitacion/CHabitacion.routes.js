'use strict'

import { Router } from 'express'
import {
    addCHabitacion,
    deleteCHabitacion,
    testCHabitacion,
    updateCHabitacion,
    viewCHabitacion,
} from './CHabitacion.controller.js'

const api = Router()

api.get('/testCHabitacion', testCHabitacion)
api.post('/addCHabitacion', addCHabitacion)
api.get('/viewCHabitacion', viewCHabitacion)
api.put('/updateCHabitacion/:id', updateCHabitacion)
api.delete('/deleteCHabitacion/:id', deleteCHabitacion)

export default api
