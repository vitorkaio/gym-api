/* eslint-disable @typescript-eslint/camelcase */
import { Document, Schema, Model, model } from 'mongoose'
import { UserInterface } from './user.interface'

export interface UserModel extends UserInterface, Document {

}

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  create_at: {
    type: Date,
    default: Date.now()
  },
  perfil: {
    type: String,
    enum: ['adm', 'student'],
    default: 'student'
  },
  info: {
    name: {
      type: String
    },
    age: {
      type: Number
    },
    gender: {
      type: String
    }
  },
  trainings: [{
    type: Schema.Types.ObjectId,
    ref: 'Training', // Referência a coleção Perfil
    default: []
  }]
})

export const User: Model<UserModel> = model<UserModel>('User', userSchema)
