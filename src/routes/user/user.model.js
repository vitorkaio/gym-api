import * as mongoose from 'mongoose'

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Training', // Referência a coleção Perfil
    default: []
  }]
})

export default mongoose.model('User', userSchema)
