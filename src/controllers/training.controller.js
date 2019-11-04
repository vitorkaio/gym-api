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
