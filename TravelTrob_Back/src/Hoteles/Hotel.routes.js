'use strict'

import { Router } from 'express'
import { isAdmin, validateJwt } from '../middlewares/validateJwt.js'
import { 
    addHotel, 
    deleteHotel, 
    getHotelCategory, 
    getImage, 
    testHotel, 
    updateHotel, 
    viewHotel 
} from './Hotel.controller.js'
import { subirImagen } from '../Utils/ImageAdd.js'

const api = Router()

api.get('/testHotel', testHotel)
api.post('/addHotel', [validateJwt, isAdmin], subirImagen.single('imagen'), addHotel)
api.get('/viewHotel', [validateJwt], viewHotel)
api.put('/updateHotel/:id', [validateJwt, isAdmin], updateHotel)
api.delete('/deleteHotel/:id', [validateJwt, isAdmin], deleteHotel)
api.get('/getImage/:image', getImage)
api.get('/getHotelCategory', getHotelCategory)

export default api