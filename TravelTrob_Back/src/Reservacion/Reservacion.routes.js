'use strict'

import { Router } from 'express'
import { isAdmin, validateJwt } from '../middlewares/validateJwt.js'
import { 
    addReservacion,
    deleteReservacion,
    testReservacion, 
    updateReservacion,
    getReservas
} from './Reservacion.controller.js'

const api = Router()

api.get('/testReservacion', testReservacion)
api.post('/addReservacion', [validateJwt], addReservacion)
api.put('/updateReservacion/:id', [validateJwt], updateReservacion)
api.delete('/deleteReservacion/:id', [validateJwt], deleteReservacion)
api.get('/getReservas', getReservas);

export default api
