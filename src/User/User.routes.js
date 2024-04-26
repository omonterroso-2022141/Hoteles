'use strict'
import express from "express"
import { deleteUser, list, login, register, test, updateProfile } from './User.controller.js'
import { isAdmin, validateJwt } from "../middlewares/validateJwt.js"

const api = express.Router()

//# Role ADMIN
api.get('/test', test)
api.get('/list', list)

//# Role CLIENT
api.post('/register', register)
api.post('/login', login)
api.put('/update/:id', updateProfile)
api.delete('/delete/:id', deleteUser)

export default api