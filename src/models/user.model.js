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
  create_data: {
    type: Date,
    default: Date.now()
  },
})

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  create_data: {
    type: Date,
    default: Date.now()
  },
  perfil: {
    type: String,
    enum: ['adm', 'student'],
  },
  trainings: {
    type: [TrainingSchema], // array de objetos do tipo menuSchema
    default: []
  },
})

export default mongoose.model('User', userSchema)