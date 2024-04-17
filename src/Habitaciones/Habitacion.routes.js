'use strict'

import { Router } from 'express'
import { 
    addHabitacion, 
    deleteHabitacion, 
    testHabitacion,
    updateHabitacion, 
    viewHabitacion 
} from './Habitacion.controller.js'

const api = Router()

api.get('/testHabitacion', testHabitacion)
api.post('/addHabitacion', addHabitacion)
api.get('/viewHabitacion', viewHabitacion)
api.put('/updateHabitacion', updateHabitacion)
api.delete('/deleteHabitacion', deleteHabitacion)

export default api