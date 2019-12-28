import User from './user.model'
import * as TrainingController from '../training/training.controller'
// import { Types } from 'mongoose'
import { cryptPassword } from '../../services/services'

// const ObjectId = Types.ObjectId

// Return all users
export const getUsers = async () => {
  try {
    const res = await User.find({}, { password: 0 }).populate('trainings')
    return res
  } catch (error) {
    throw (error.message)
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
    user.password = undefined
    return user
  } catch (error) {
    throw (error.message)
  }
}

// Remove user
export const removeUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id)
    if (user) {
      user.password = undefined
      return user
    } else {
      throw new Error(null)
    }
  } catch (error) {
    throw (error.message)
  }
}

// Search and return user by filter passed
export const findUser = async (id) => {
  if (id) {
    try {
      const user = await User.findById(id)
      if (user) {
        user.password = undefined
        return user
      } else {
        throw new Error(null)
      }
    } catch (error) {
      throw (error.message)
    }
  } else {
    throw new Error(null)
  }
}

// Update user
export const updaterUser = async (id, data) => {
  try {
    const ops = { runValidators: true, new: true }
    const { password } = data
    if (password) {
      data.password = await cryptPassword(data.password)
    }
    const user = await User.findByIdAndUpdate(id, data, ops).populate('trainings')
    if (user) {
      user.password = undefined
      return user
    } else {
      throw new Error(null)
    }
  } catch (error) {
    throw (error.message)
  }
}

// Add a training for one specific user
export const updateAddTrainingUser = async (id, data) => {
  try {
    const training = await TrainingController.createTraining(data)
    const user = await findUser(id)
    if (user) {
      user.trainings.push(training._id)
      const res = await updaterUser(user._id, user)
      return res
    } else {
      throw new Error(null)
    }
  } catch (error) {
    throw (error.message)
  }
}

// removeTrainingUser
export const removeTrainingUser = async (userId, trainingId) => {
  try {
    const ops = { runValidators: true, new: true }
    const user = await User.findOneAndUpdate({ _id: userId }, { $pull: { trainings: { $in: [trainingId] } } }, ops).populate('trainings')
    if (user) {
      user.password = undefined
      return user
    } else {
      throw new Error(null)
    }
  } catch (error) {
    throw (error.message)
  }
}
