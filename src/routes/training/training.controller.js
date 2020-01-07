import Training from './training.model'

// Return all Trainings
export const getTrainings = async () => {
  try {
    const res = await Training.find({})
    return res
  } catch (error) {
    throw (error.message)
  }
}

// Create new Training
export const createTraining = async (data) => {
  try {
    const res = await Training.create(data)
    return res
  } catch (error) {
    throw (error.message)
  }
}

// Remove a training
export const removeTraining = async (id) => {
  try {
    const training = await Training.findByIdAndDelete(id)
    if (training) {
      return training
    } else {
      const message = { message: training }
      throw (message)
    }
  } catch (error) {
    throw (error.message)
  }
}

// Edit a training
export const updateEditTraining = async (id, data) => {
  try {
    const ops = { runValidators: true, new: true }
    const training = await Training.findByIdAndUpdate(id, data, ops)
    if (training) {
      return training
    } else {
      const message = { message: training }
      throw (message)
    }
  } catch (error) {
    throw (error.message)
  }
}

// Add one exercise in training
export const updateAddExerciseTraining = async (id, newExercise) => {
  try {
    const ops = { runValidators: true, new: true }
    const training = await Training.findOneAndUpdate({ _id: id }, { $push: { exercises: newExercise } }, ops)
    if (training) {
      return training
    } else {
      const message = { message: training }
      throw (message)
    }
  } catch (error) {
    throw (error.message)
  }
}

// Edit a exercise in training specific
export const updateEditExerciseTraining = async (idTraining, idExercise, data) => {
  try {
    const ops = { runValidators: true, new: true }
    const training = await Training.findOneAndUpdate({
      $and: [{ _id: idTraining }, { 'exercises._id': idExercise }]
    }, { $set: { 'exercises.$': data } }, ops)
    if (training) {
      return training
    } else {
      const message = { message: training }
      throw (message)
    }
  } catch (error) {
    throw (error.message)
  }
}

// Remove a exercise from training for specific user
export const updateRemoveExerciseTraining = async (idTraining, idExercise) => {
  try {
    const ops = { runValidators: true, new: true }
    const training = await Training.findOneAndUpdate({ _id: idTraining }, { $pull: { exercises: { _id: idExercise } } }, ops)
    if (training) {
      return training
    } else {
      const message = { message: training }
      throw (message)
    }
  } catch (error) {
    throw (error.message)
  }
}
