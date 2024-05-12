'use strict'

import { Router } from 'express'
import { isAdmin, validateJwt } from '../middlewares/validateJwt.js'
import { 
    addHabitacion, 
    deleteHabitacion, 
    testHabitacion,
    updateHabitacion, 
    viewHabitacion 
} from './Habitacion.controller.js'

const api = Router()

api.get('/testHabitacion', testHabitacion)
api.post('/addHabitacion', [validateJwt], addHabitacion)
api.get('/viewHabitacion', [validateJwt], viewHabitacion)
api.put('/updateHabitacion/:id', [validateJwt], updateHabitacion)
api.delete('/deleteHabitacion/:id', [validateJwt], deleteHabitacion)

export default api