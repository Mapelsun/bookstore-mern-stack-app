import express from 'express'
import { PORT, mongoDBURL } from './config.js'

const app = express()

app.get('/', (req, res) => {
  console.log(req)
  return res.status(234).send('Welcome to MERN Stack Tutorial')
})

app.listen(PORT, (req, res) => {
console.log(`App is listening to port: ${PORT}`)
})