// require('dotenv').config()
// import config from '../config/default'
import * as config from './config/env_test'

import express from 'express'
// import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import UserRoutes from './routes/user/user.routes'
import TrainingRoutes from './routes/training/training.routes'

const app = express()

// middleware para log.
app.use(morgan('dev'))

// app.use(bodyParser.urlencoded({ extended: false }));  for <form>
app.use(express.json())

// Set cors
app.use(cors())

// Connect mongoose
mongoose.connect(`${config.mongoUrl}`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(_ => console.log('mongoconnect')).catch(err => { console.log(err) })

/* const close = () => {
  mongoose.connection.close()
} */

// Routes
app.use('/users', UserRoutes)
app.use('/trainings', TrainingRoutes)

// middleware para erros.
app.use((_, __, next) => {
  const error = new Error('Not Found!')
  error.status = 404
  next(error)
})

app.use((error, _, res, __) => {
  res.status(error.status || 500)
  res.json({
    error: error.message
  })
})

// middleware para erros.
// const erros: Fails = new Fails()
// app.use(erros.errorsStatus)

const port = config.port
app.listen(port, () => {
  console.log('App listening on port ' + port)
})
