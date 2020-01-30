/* eslint-disable @typescript-eslint/camelcase */
import { Document, Schema, Model, model } from 'mongoose'
import { TrainingInterface, ExerciseInterface } from './training.interface'

export interface TrainingModel extends TrainingInterface, Document {

}

export interface ExerciseModel extends ExerciseInterface, Document {

}

// Schema que será utilizado dentro de outro Schema.
const exerciseSchema = new Schema({
  number: {
    type: Number
  },
  exercise: {
    type: String
  },
  weight: {
    type: Number
  },
  repetitions: {
    type: Number
  },
  time: {
    type: Number
  },
  obs: {
    type: String
  }
})

const TrainingSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  exercises: {
    type: [exerciseSchema], // array de objetos do tipo menuSchema
    default: []
  },
  create_at: {
    type: Date,
    default: Date.now()
  }
})

export const Training: Model<TrainingModel> = model<TrainingModel>('Training', TrainingSchema)
