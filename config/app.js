//Imports
import helmet from 'helmet'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { config } from 'dotenv'
import userRoutes from '../src/User/User.routes.js'
import categoryRoutes from '../src/Category/Category.routes.js'

//Configs
const app = express()
config()
const port = process.env.PORT || 2880

//Configurations of Express Server
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

//Routes Declarations
app.use('/user', userRoutes)
app.use('/category', categoryRoutes)

//Build Server
export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}