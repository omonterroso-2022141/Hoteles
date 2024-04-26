import { initServer } from './config/app.js'
import { connect } from './config/mongo.js'
import { CHabitacionDefault } from './src/CategoriaHabitacion/CHabitacion.controller.js'
import { defaultCategory } from './src/Category/Category.controller.js'
import { defaultAdmin } from './src/User/User.controller.js'

initServer()
connect()
defaultAdmin()
defaultCategory()
CHabitacionDefault()
