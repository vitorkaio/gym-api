import * as TrainingController from '../../controllers/training.controller'

const Training = {
  async createTraining(_, { data }) {
    return TrainingController.createTraining({...data})
  },

  // Delete a training
  async removeTraining(_, { filterTraining }) {
    return TrainingController.removeTraining(filterTraining)
  },

  // Edit a training
  async updateEditTraining(_, { filterTraining, data } ) {
    return TrainingController.updateEditTraining(filterTraining, data)
  },

   // Add one exercise in specific training exists
   async updateAddExerciseTraining(_, { filterTraining, data }) {
    return TrainingController.updateAddExerciseTraining(filterTraining, data)
  },

  // Edit a exercise from training specific user
  async updateEditExerciseTraining(_, { filterTraining, filterExercise, data }) {
    return TrainingController.updateEditExerciseTraining(filterTraining, filterExercise, data)
  },

  // Remove a exercise from training for specific user
  async updateRemoveExerciseTraining(_, { filterTraining, filterExercise }) {
    return TrainingController.updateRemoveExerciseTraining(filterTraining, filterExercise)
  },

}

export default Training
