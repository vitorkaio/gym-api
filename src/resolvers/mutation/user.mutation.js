import * as UserController from '../../controllers/user.controller'

const User = {
  // Create new user
  async createUser(_, { data }) {
    return UserController.createUser({...data})
  },
  
  // Add a training for one specific user
  async updateAddTrainingUser(_, { filter, data }) {
    return UserController.updateAddTrainingUser(filter, data)
  },

  // Remove one training for specific user
  async removeTrainingUser(_, { filterUser, filterTraining }) {
    return UserController.removeTrainingUser(filterUser, filterTraining)
  },

  // Add one exercise in specific training exists
  async updateAddExerciseTrainingUser(_, { filterUser, filterTraining, data }) {
    return UserController.updateAddExerciseTrainingUser(filterUser, filterTraining, data)
  }

}

export default User
