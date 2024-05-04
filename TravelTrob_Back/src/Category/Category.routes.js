'use strict'
import express from "express"
import { create, deleteCategory, list, test, update } from "./Category.controller.js"
import { isAdmin, validateJwt } from "../middlewares/validateJwt.js"

const api = express.Router()

// # Role ADMIN
api.get('/test', test)
api.post('/create', create)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteCategory)


// # Role CLIENT
api.get('/list', list)

export default api