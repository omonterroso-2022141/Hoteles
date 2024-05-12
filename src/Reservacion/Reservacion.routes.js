'use strict'

import { Router } from 'express'
import { isAdmin, validateJwt } from '../middlewares/validateJwt.js'
import { 
    addReservacion,
    deleteReservacion,
    testReservacion, 
    updateReservacion, 
    viewReservacion
} from './Reservacion.controller.js'

const api = Router()

api.get('/testReservacion', testReservacion)
api.post('/addReservacion', [validateJwt], addReservacion)
api.get('/viewReservacion', [validateJwt], viewReservacion)
api.put('/updateReservacion/:id', [validateJwt], updateReservacion)
api.delete('/deleteReservacion/:id', [validateJwt], deleteReservacion)

export default api
