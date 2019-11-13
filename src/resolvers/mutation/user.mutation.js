import * as UserController from '../../controllers/user.controller'

const User = {
  // Create new user
  async createUser(_, { data }) {
    return UserController.createUser({...data})
  },

  // Remove user
  async removeUser(_, { filter }) {
    return UserController.removeUser(filter)
  },

  // Edit user
  async updateEditUser(_, { filter, data }) {
    return UserController.updateEditUser(filter, data)
  },
  
  // Add a training for one specific user
  async updateAddTrainingUser(_, { filter, data }) {
    return UserController.updateAddTrainingUser(filter, data)
  },

  // Remove one training for specific user
  async removeTrainingUser(_, { filterUser, filterTraining }) {
    return UserController.removeTrainingUser(filterUser, filterTraining)
  },

}

export default User
