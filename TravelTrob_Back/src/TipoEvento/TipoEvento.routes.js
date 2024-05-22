'use strict'

import { Router } from 'express'
import { isAdmin, validateJwt } from '../middlewares/validateJwt.js'
import { 
    addTipoEvento, 
    deleteTipoEvento, 
    updateTipoEvento, 
    viewTipoEvento, 
    viewTipoEventoHotel} 
from './TipoEvento.Controller.js'

const api = Router()

api.post('/addTipoEvento', [validateJwt, isAdmin], addTipoEvento)
api.get('/viewTipoEvento', [validateJwt, isAdmin], viewTipoEvento)
api.get('/viewTipoEventoHotel/:id', [validateJwt, isAdmin], viewTipoEventoHotel)
api.put('/updateTipoEvento/:id', [validateJwt, isAdmin], updateTipoEvento)
api.delete('/deleteTipoEvento/:id', [validateJwt, isAdmin], deleteTipoEvento)


export default api