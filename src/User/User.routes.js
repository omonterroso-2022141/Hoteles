'use strict'
import express from "express"
import { deleteUser, list, login, register, test, updateProfile } from './User.controller.js'
import { isAdmin, validateJwt } from "../middlewares/validateJwt.js"

const api = express.Router()

//# Role ADMIN
api.get('/test', test)
api.get('/list', [validateJwt, isAdmin], list)

//# Role CLIENT
api.post('/register', register)
api.post('/login', login)
api.put('/update/:id', [validateJwt], updateProfile)
api.delete('/delete/:id', [validateJwt], deleteUser)

export default api