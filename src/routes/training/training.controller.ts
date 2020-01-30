import { Training, TrainingModel } from './training.model'
import { TrainingInterface, ExerciseInterface } from './training.interface'

class TrainingController {
  // Return all Trainings
  static async getTrainings (): Promise<TrainingModel[]> {
    try {
      const res: TrainingModel[] = await Training.find({})
      return res
    } catch (error) {
      throw (error.message)
    }
  }

  // Create new Training
  static async createTraining (data: TrainingInterface): Promise<TrainingModel> {
    try {
      const res = await Training.create(data)
      return res
    } catch (error) {
      throw (error.message)
    }
  }

  // Remove a training
  static async removeTraining (id: string): Promise<TrainingModel> {
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
  static async updateEditTraining (id: string, data: TrainingInterface): Promise<TrainingModel> {
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
  static async updateAddExerciseTraining (id: string, newExercise: ExerciseInterface[]): Promise<TrainingModel> {
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
  static async updateEditExerciseTraining (idTraining: string, idExercise: string, data: ExerciseInterface): Promise<TrainingModel> {
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
  static async updateRemoveExerciseTraining (idTraining: string, idExercise: string): Promise<TrainingModel> {
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
}// Fim da classe

export default TrainingController
