import * as UserController from '../../controllers/user.controller'

const User = {
  async createUser(_, { data }) {
    return UserController.createUser({...data})
  }
}

export default User
