import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import * as config from './config/env_test'
import TrainingRoutes from './routes/training/training.routes'
import UserRoutes from './routes/user/user.routes'
import AuthRoutes from './routes/auth/auth.routes'

class Server {
  public express = express.application

  constructor () {
    this.express = express()

    this._middlewares()
    this._database()
    this._routes()
  }

  private _middlewares (): void {
    this.express.use(morgan('dev'))
    this.express.use(express.json())
    this.express.use(cors())
  }

  private _database (): void {
    mongoose.connect(`${config.mongoUrl}`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  }

  private _routes (): void {
    this.express.use('/trainings', TrainingRoutes)
    this.express.use('/users', UserRoutes)
    this.express.use('/auth', AuthRoutes)
  }
}

export default new Server().express
