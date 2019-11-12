import * as mongoose from 'mongoose'

// Schema que será utilizado dentro de outro Schema.
const exerciseSchema = new mongoose.Schema({
  number: {
    type: Number,
  },
  exercise: {
    type: String,
  },
  weight: {
    type: Number,
  },
  repetitions: {
    type: Number,
  },
  time: {
    type: Number,
  },
  obs: {
    type: String,
  },
});

const TrainingSchema = new mongoose.Schema({
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
  },
})

export default mongoose.model('Training', TrainingSchema)