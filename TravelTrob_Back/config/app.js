//Imports
import helmet from 'helmet'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { config } from 'dotenv'
import userRoutes from '../src/User/User.routes.js'
import categoryRoutes from '../src/Category/Category.routes.js'
import routerHotel from '../src/Hoteles/Hotel.routes.js'
import routerHabitacion from '../src/Habitaciones/Habitacion.routes.js'
import routerCHabitacion from '../src/CategoriaHabitacion/CHabitacion.routes.js'
import routerReservacion from '../src/Reservacion/Reservacion.routes.js'
import routerTipoEvento from '../src/TipoEvento/TipoEvento.routes.js'
import routerEvento from '../src/Evento/Evento.routes.js'

//Configs
const app = express()
config()
const port = process.env.PORT || 2880

//Configurations of Express Server
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

//Routes Declarations
app.use('/user', userRoutes)
app.use('/category', categoryRoutes)
app.use('/Hotel', routerHotel)
app.use('/Habitacion', routerHabitacion)
app.use('/CHabitacion', routerCHabitacion)
app.use('/Reservacion', routerReservacion)
app.use('/TipoEvento', routerTipoEvento)
app.use('/Evento', routerEvento)

//Raise the server
export const initServer = () => {
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}
