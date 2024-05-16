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
api.post('/addHabitacion', [validateJwt, isAdmin], addHabitacion)
api.get('/viewHabitacion', [validateJwt], viewHabitacion)
api.put('/updateHabitacion/:id', [validateJwt, isAdmin], updateHabitacion)
api.delete('/deleteHabitacion/:id', [validateJwt, isAdmin], deleteHabitacion)

export default api