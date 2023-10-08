import express from 'express'
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express()

// Middleware for parsing request body
app.use(express.json())

// Allow all origins with default of cors(*)
app.use(cors())

// Allow use of env variables
dotenv.config()

// // // Allow custom origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// )

app.get('/', (req, res) => {
  console.log(req)
  return res.status(234).send('Welcome to MERN Stack Tutorial')
})

app.use('/books', booksRoute)

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log('App connected to database.')

    app.listen(PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })

