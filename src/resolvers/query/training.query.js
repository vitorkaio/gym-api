import * as TrainingController from '../../controllers/training.controller'

export default {
  async trainings(_, __) {
    return TrainingController.getTrainings()
  },
}