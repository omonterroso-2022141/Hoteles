'use strict'

import { Router } from 'express'
import { isAdmin, validateJwt } from '../middlewares/validateJwt.js'
import {
    addCHabitacion,
    deleteCHabitacion,
    testCHabitacion,
    updateCHabitacion,
    viewCHabitacion,
} from './CHabitacion.controller.js'

const api = Router()

api.get('/testCHabitacion', [validateJwt], testCHabitacion)
api.post('/addCHabitacion', [validateJwt], addCHabitacion)
api.get('/viewCHabitacion', [validateJwt], viewCHabitacion)
api.put('/updateCHabitacion/:id', [validateJwt], updateCHabitacion)
api.delete('/deleteCHabitacion/:id', [validateJwt], deleteCHabitacion)

export default api
