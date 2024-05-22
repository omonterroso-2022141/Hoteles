'use strict'

import { Router } from 'express'
import { isAdmin, validateJwt } from '../middlewares/validateJwt.js'
import { 
    addHabitacion, 
    deleteHabitacion, 
    testHabitacion,
    updateHabitacion, 
    viewHabitacion, 
    viewHotelForHabitacion
} from './Habitacion.controller.js'

const api = Router()

api.get('/testHabitacion', testHabitacion)
api.post('/addHabitacion', [validateJwt, isAdmin], addHabitacion)
api.get('/viewHabitacion/:idHotel', [validateJwt], viewHabitacion)
api.put('/updateHabitacion/:id', [validateJwt, isAdmin], updateHabitacion)
api.delete('/deleteHabitacion/:id', [validateJwt, isAdmin], deleteHabitacion)
api.get('/viewHotelForHabitacion/:id', [validateJwt], viewHotelForHabitacion)

export default api