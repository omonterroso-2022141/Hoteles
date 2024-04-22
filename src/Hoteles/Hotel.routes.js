'use strict'

import { Router } from 'express'
import { 
    addHotel, 
    deleteHotel, 
    testHotel, 
    updateHotel, 
    viewHotel 
} from './Hotel.controller.js'

const api = Router()

api.get('/testHotel', testHotel)
api.post('/addHotel', addHotel)
api.get('/viewHotel', viewHotel)
api.put('/updateHotel/:id', updateHotel)
api.delete('/deleteHotel/:id', deleteHotel)

export default api