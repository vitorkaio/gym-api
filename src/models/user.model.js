import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
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
  }
})

export default mongoose.model('User', userSchema)