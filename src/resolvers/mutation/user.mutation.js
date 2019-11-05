import * as UserController from '../../controllers/user.controller'

const User = {
  async createUser(_, { data }) {
    return UserController.createUser({...data})
  },
  
  async updateAddTrainingUser(_, { filter, data }) {
    return UserController.updateAddTrainingUser(filter, data)
  },

  async updateAddExerciseTrainingUser(_, { filterUser, filterTraining, data }) {
    return UserController.updateAddExerciseTrainingUser(filterUser, filterTraining, data)
  }

}

export default User
