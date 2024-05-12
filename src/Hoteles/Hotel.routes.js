'use strict'

import { Router } from 'express'
import { isAdmin, validateJwt } from '../middlewares/validateJwt.js'
import { 
    addHotel, 
    deleteHotel, 
    testHotel, 
    updateHotel, 
    viewHotel 
} from './Hotel.controller.js'

const api = Router()

api.get('/testHotel', testHotel)
api.post('/addHotel', [validateJwt], addHotel)
api.get('/viewHotel', [validateJwt], viewHotel)
api.put('/updateHotel/:id', [validateJwt], updateHotel)
api.delete('/deleteHotel/:id', [validateJwt], deleteHotel)

export default api