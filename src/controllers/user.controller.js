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


// Search and returno user by filter passed
export const findUser = async (filter) => {
  const { id } = filter
  if (id) {
    try {
      const res = await User.findById(id)
      return res
    } 
    catch (error) {
      throw new Error(error.message)
    }
  }
  else return null
}


// Update user
export const updaterUser = async (id, data) => {
  try {
    const ops = {runValidators: true, new: true}
    const res = await User.findByIdAndUpdate(id, data, ops)
    return res  
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Add a training for one specific user
export const updateAddTrainingUser = async (filter, data) => {
  try {
    const user = await findUser(filter)
    if (user) {
      user.trainings.push(data) 
      return updaterUser(user._id, user)
    }
    else return null
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Add one exercise in specific training exists
export const updateAddExerciseTrainingUser = async (filterUser, filterTraining, data) => {
  try {
    const { id: userId } = filterUser
    const { id: trainingId } = filterTraining
    const ops = {runValidators: true, new: true}
    const res = await User.findOneAndUpdate({$and: [{'_id': userId}, {'trainings._id': trainingId}]}, {$push: {'trainings.$.exercises': data}}, ops)
    return res
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// removeTrainingUser
export const removeTrainingUser = async (filterUser, filterTraining) => {
  try {
    const user = await findUser(filterUser)
    if (user) {
      const { id: idTraining } = filterTraining
      for (let cont = 0; cont < user.trainings.length; cont++) {
        if (user.trainings[cont]._id.equals(idTraining)) {
          user.trainings.splice(cont, 1)
          return updaterUser(user._id, user)
        }
      }
    }
  } 
  catch (error) {
    throw new Error(error.message)
  }
}
