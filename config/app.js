//Imports of configs
import helmet from 'helmet'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { config } from 'dotenv'

//Routers


//Configs
const app = express()
config()
const port = process.env.PORT || 2880

//Configs of express
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

//Declared of routers


//Raise the server
export const initServerd = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}