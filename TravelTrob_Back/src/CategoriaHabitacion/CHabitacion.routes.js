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
api.post('/addCHabitacion', [validateJwt, isAdmin], addCHabitacion)
api.get('/viewCHabitacion', [validateJwt], viewCHabitacion)
api.put('/updateCHabitacion/:id', [validateJwt, isAdmin], updateCHabitacion)
api.delete('/deleteCHabitacion/:id', [validateJwt, isAdmin], deleteCHabitacion)

export default api
