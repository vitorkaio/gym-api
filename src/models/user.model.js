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
  create_data: {
    type: Date,
    default: Date.now()
  },
  perfil: {
    type: String,
    enum: ['adm', 'student'],
  },
  trainings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Training', // Referência a coleção Perfil
    default: []
  }]
})

export default mongoose.model('User', userSchema)