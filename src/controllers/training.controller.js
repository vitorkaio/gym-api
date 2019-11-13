import Training from '../models/training.model'

// Return all Trainings
export const getTrainings = async () => {
  try {
    const res = await Training.find({})
    return res  
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Create new Training
export const createTraining = async (data) => {
  try {
    const res = await Training.create(data)
    return res
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Remove a training
export const removeTraining = async (filterTraining) => {
  try {
   const { id: trainingId } = filterTraining
   const training = await Training.findByIdAndDelete(trainingId)
   console.log(training)
   return training 
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Edit a training
export const updateEditTraining = async (filterTraining, data) => {
  try {
   const { id: trainingId } = filterTraining
   const ops = {runValidators: true, new: true}
   const training = await Training.findByIdAndUpdate(trainingId, data, ops)
   return training 
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Add one exercise in training
export const updateAddExerciseTraining = async (filterTraining, newExercise) => {
  try {
    const { id: trainingId } = filterTraining
    const ops = {runValidators: true, new: true}
    const training = await Training.findOneAndUpdate({_id: trainingId}, {$push: {'exercises': newExercise}}, ops)
    return training
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Edit a exercise in training specific
export const updateEditExerciseTraining = async (filterTraining, filterExercise, data) => {
  try {
    const { id: trainingId } = filterTraining
    const { id: exerciseId } = filterExercise
    const ops = {runValidators: true, new: true}
    const training = await Training.findOneAndUpdate({$and: [{_id: trainingId}, {'exercises._id':  exerciseId}]}, {$set: {'exercises.$': data}}, ops)
    return training
  } 
  catch (error) {
    throw new Error(error.message)
  }
}


// Remove a exercise from training for specific user
export const updateRemoveExerciseTraining = async (filterTraining, filterExercise ) => {
  try {
    const { id: trainingId } = filterTraining
    const { id: exerciseId } = filterExercise
    const ops = {runValidators: true, new: true}
    const training = await Training.findOneAndUpdate({_id: trainingId}, {$pull: {'exercises': {_id: exerciseId}}}, ops)
    return training
  } 
  catch (error) {
    throw new Error(error.message)
  }
}
