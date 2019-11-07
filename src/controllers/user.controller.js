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
    const user = await User.findOneAndUpdate({$and: [{'_id': userId}, {'trainings._id': trainingId}]}, {$push: {'trainings.$.exercises': data}}, ops)
    return user
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Remove a exercise from training for specific user
export const updateRemoveExerciseTrainingUser = async (filterUser, filterTraining, filterExercise ) => {
  try {
    const { id: userId } = filterUser
    const { id: trainingId } = filterTraining
    const { id: exerciseId } = filterExercise
    const ops = {runValidators: true, new: true}
    const user = await User.findOneAndUpdate({$and: [{'_id': userId}, {'trainings._id': trainingId}]}, {$pull: {'trainings.$.exercises': {'_id': exerciseId}}}, ops)
    return user
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Edit a exercise from training specific user
export const updateEditExerciseTrainingUser = async (filterUser, filterTraining, filterExercise, data) => {
  try {
    const { id: userId } = filterUser
    const { id: trainingId } = filterTraining
    const { id: exerciseId } = filterExercise
    // const ops = {runValidators: true, new: true}
    const user = await User.findOneAndUpdate({$and: [{'_id': userId}, {'trainings._id': trainingId}, {'trainings.exercises._id': exerciseId}]}, {$set: {'trainings.$[outer].exercises.$[inner].exercise': data['exercise']}},
    { runValidators: true, new: true, arrayFilters: [
      { "outer._id": trainingId },
      { "inner._id": exerciseId }
  ] })
    console.log(user)
    return user
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
    const user = await User.findOneAndDelete({$and: [{'_id': userId}, {'trainings._id': trainingId}]})
    return user
  } 
  catch (error) {
    throw new Error(error.message)
  }
}
