import { initServer } from './config/app.js'
import { connect } from './config/mongo.js'
import { defaultAdmin } from './src/User/User.controller.js'

initServer()
connect()
defaultAdmin()