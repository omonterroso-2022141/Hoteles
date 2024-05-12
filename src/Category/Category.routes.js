'use strict'
import express from "express"
import { create, deleteCategory, list, test, update } from "./Category.controller.js"
import { isAdmin, validateJwt } from "../middlewares/validateJwt.js"

const api = express.Router()

// # Role ADMIN
api.get('/test', test)
api.post('/create', [validateJwt], create)
api.put('/update/:id', [validateJwt], update)
api.delete('/delete/:id', [validateJwt], deleteCategory)


// # Role CLIENT
api.get('/list', [validateJwt], list)

export default api