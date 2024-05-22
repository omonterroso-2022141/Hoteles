'use strict'

import { Router } from 'express'
import { isAdmin, validateJwt } from '../middlewares/validateJwt.js'
import { addEvento, deleteEvento, updateEvento, viewEvento } from './Evento.Controller.js'

const api = Router()

api.post('/addTipoEvento', [validateJwt, isAdmin], addEvento )
api.get('/viewEvento', [validateJwt, isAdmin], viewEvento )
api.put('/updateEvento/:id', [validateJwt, isAdmin], updateEvento )
api.delete('/deleteEvento/:id', [validateJwt, isAdmin], deleteEvento )


export default api