import User from '../models/user.model'
import * as TrainingController from './training.controller'
import { Types } from 'mongoose'
import { cryptPassword } from '../services/services'

const ObjectId = Types.ObjectId;

// Return all users
export const getUsers = async () => {
  try {
    const res = await User.find({}).populate('trainings')
    console.log('GET users')
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
    const user = await User.create(newUser)
    
    if (!user)
      throw('Não foi possível adicionar o usuário')
      
    return getUsers()
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Remove user
export const removeUser = async (filter) => {
  try {
    const { id } = filter
    const user = await User.findByIdAndDelete(id)

    if (!user)
      throw('Não foi possível remove o usuário')
      
    return getUsers()
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
    const res = await User.findByIdAndUpdate(id, data, ops).populate('trainings')
    return res  
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


  // Edit user
  export const updateEditUser = async (filter, data) => {
    try {
      const { id } = filter
      return updaterUser(id, data)
    } 
    catch (error) {
      throw new Error(error.message)
    } 
  }


// Add a training for one specific user
export const updateAddTrainingUser = async (filter, data) => {
  try {
    const res = await TrainingController.createTraining(data)
    const user = await findUser(filter)
    if (user) {
      user.trainings.push(res._id) 
      await updaterUser(user._id, user)
      return getUsers()
    }
    else return null
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// removeTrainingUser
export const removeTrainingUser = async (filterUser, filterTraining) => {
  try {
    const { id: userId } = filterUser
    const { id: trainingId } = filterTraining
    const ops = {runValidators: true, new: true}
    const user = await User.findOneAndUpdate({_id: userId}, {$pull: {trainings: {$in: [trainingId]}}}, ops).populate('trainings')
    return user
  } 
  catch (error) {
    throw new Error(error.message)
  }
}

