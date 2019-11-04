import * as TrainingController from '../../controllers/training.controller'

const User = {
  async createTraining(_, { data }) {
    console.log({...data})
    return TrainingController.createTraining({...data})
  }
}

export default User
