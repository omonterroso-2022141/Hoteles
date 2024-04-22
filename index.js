import { initServerd } from './config/app.js'
import { connect } from './config/mongo.js'
import { CHabitacionDefault } from './src/CategoriaHabitacion/CHabitacion.controller.js'

initServerd()
connect()
CHabitacionDefault()