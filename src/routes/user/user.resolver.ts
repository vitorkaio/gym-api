import UserController from './user.controller'
import { Response, Request } from 'express'
import ResponseResolver from '../response/response'
import Codes from '../response/code'
import { UserModel } from './user.model'
import { UserInterface } from './user.interface'
import { TrainingInterface } from '@routes/training/training.interface'

// import messages from '../response/messages'

class UserResolver {
  // Retorna todos os usuários
  static async getUsers (req: Request, res: Response): Promise<Response> {
    try {
      const result: UserModel[] = await UserController.getUsers()
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  // Retorna um usuário
  static async getUser (req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id
      const result = await UserController.getUser(id)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  // Cria um novo usuário
  static async createuser (req: Request, res: Response): Promise<Response> {
    try {
      const data: UserInterface = req.body
      const result = await UserController.createUser(data)
      return ResponseResolver.responseSuccess(res, Codes.CREATE, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  // Remove um usuário
  static async removeUser (req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id
      const result = await UserController.removeUser(id)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  // Atualiza as informações de um usuário
  static async updateUser (req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id
      const data = req.body
      const result = await UserController.updaterUser(id, data)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  // Adiciona um treino ao usuário
  static async updateAddTrainingUser (req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id
      const data: TrainingInterface = req.body
      const result = await UserController.updateAddTrainingUser(id, data)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  // Remove um treino do usuário
  static async removeTrainingUser (req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.userId
      const trainingId = req.params.trainingId
      const result = await UserController.removeTrainingUser(userId, trainingId)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }
}// Fim da classe

export default UserResolver
