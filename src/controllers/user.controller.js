import User from '../models/user.model'
import { cryptPassword } from '../services/services'

// Return all users
export const getUsers = async () => {
  try {
    const res = await User.find({})
    return res  
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Create new user
export const createUser = async (data) => {
  try {
    const newUser = {
      ...data,
      password: await cryptPassword(data.password)
    }
    const res = await User.create(newUser)
    return res
  } 
  catch (error) {
    throw new Error(error.message)
  }
}
