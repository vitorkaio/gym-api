import { User, UserModel } from './user.model'
import TrainingController from '../training/training.controller'
// import { Types } from 'mongoose'
import { cryptPassword } from '../../services/services'
import { UserInterface } from './user.interface'
import { TrainingInterface } from '@routes/training/training.interface'

// const ObjectId = Types.ObjectId

class UserController {
  // Return all users
  static async getUsers (): Promise<UserModel[]> {
    try {
      const res = await User.find({}, { password: 0 }).populate('trainings')
      return res
    } catch (error) {
      throw (error.message)
    }
  }

  // Retorna um usuário
  static async getUser (id: string): Promise<UserModel> {
    try {
      const user = await User.findById(id, { password: 0 }).populate('trainings')
      if (user) {
        return user
      } else {
        const message = { message: user }
        throw (message)
      }
    } catch (error) {
      throw (error.message)
    }
  }

  // Create new user
  static async createUser (data: UserInterface): Promise<UserModel> {
    try {
      const newUser: UserInterface = {
        ...data,
        password: await cryptPassword(data.password ? data.password : '')
      }
      const user = await User.create(newUser)
      user.password = undefined
      return user
    } catch (error) {
      throw (error.message)
    }
  }

  // Remove user
  static async removeUser (id: string): Promise<UserModel> {
    try {
      const user = await User.findByIdAndDelete(id)
      if (user) {
        user.password = undefined
        return user
      } else {
        const message = { message: user }
        throw (message)
      }
    } catch (error) {
      throw (error.message)
    }
  }

  // Search and return user by filter passed
  static async findUser (id: string): Promise<UserModel> {
    if (id) {
      try {
        const user = await User.findById(id)
        if (user) {
          user.password = undefined
          return user
        } else {
          const message = { message: user }
          throw (message)
        }
      } catch (error) {
        throw (error.message)
      }
    } else {
      const message = { message: null }
      throw (message)
    }
  }

  // Update user
  static async updaterUser (id: string, data: UserInterface): Promise<UserModel> {
    try {
      const ops = { runValidators: true, new: true }
      const { password } = data
      if (password) {
        data.password = await cryptPassword(data.password ? data.password : '')
      }
      const user = await User.findByIdAndUpdate(id, data, ops).populate('trainings')
      if (user) {
        user.password = undefined
        return user
      } else {
        const message = { message: user }
        throw (message)
      }
    } catch (error) {
      throw (error.message)
    }
  }

  // Add a training for one specific user
  static async updateAddTrainingUser (id: string, data: TrainingInterface): Promise<UserModel> {
    try {
      const training = await TrainingController.createTraining(data)
      const user = await this.findUser(id)
      if (user) {
        user.trainings && user.trainings.push(training._id)
        const res = await this.updaterUser(user._id, user)
        return res
      } else {
        const message = { message: user }
        throw (message)
      }
    } catch (error) {
      throw (error.message)
    }
  }

  // removeTrainingUser
  static async removeTrainingUser (userId: string, trainingId: string): Promise<UserModel> {
    try {
      const ops = { runValidators: true, new: true }
      const user = await User.findOneAndUpdate({ _id: userId }, { $pull: { trainings: { $in: [trainingId] } } }, ops).populate('trainings')
      if (user) {
        user.password = undefined
        return user
      } else {
        const message = { message: user }
        throw (message)
      }
    } catch (error) {
      throw (error.message)
    }
  }
}// Fim da classe

export default UserController
