'use strict'

import { Router } from 'express'

import { 
    addReservacion,
    deleteReservacion,
    testReservacion, 
    updateReservacion, 
    viewReservacion
} from './Reservacion.controller.js'

const api = Router()

api.get('/testReservacion', testReservacion)
api.post('/addReservacion', addReservacion)
api.get('/viewReservacion', viewReservacion)
api.put('/updateReservacion/:id', updateReservacion)
api.delete('/deleteReservacion/:id', deleteReservacion)

export default api
