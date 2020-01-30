import TrainingController from './training.controller'
import { TrainingModel } from './training.model'
import { Response, Request } from 'express'
import ResponseResolver from '../response/response'
import Codes from '../response/code'
import { TrainingInterface, ExerciseInterface } from './training.interface'

// import messages from '../response/messages'

class TrainingResolver {
  // Retorna todos os veículos
  static async getTrainings (req: Request, res: Response): Promise<Response> {
    try {
      const result: TrainingModel[] = await TrainingController.getTrainings()
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  // Cria um novo treino
  static async createTraining (req: Request, res: Response): Promise<Response> {
    try {
      const data: TrainingInterface = req.body
      const result = await TrainingController.createTraining(data)
      return ResponseResolver.responseSuccess(res, Codes.CREATE, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  // Remove um treino
  static async removeTraining (req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id
      const result = await TrainingController.removeTraining(id)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  static async updateEditTraining (req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id
      const data: TrainingInterface = req.body
      const result = await TrainingController.updateEditTraining(id, data)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  // Adiciona um novo treino em um usuário já existente
  static async updateAddExerciseTraining (req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id
      const data: ExerciseInterface[] = req.body
      const result = await TrainingController.updateAddExerciseTraining(id, data)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  // Edita um exercicío de um treino
  static async updateEditExerciseTraining (req: Request, res: Response): Promise<Response> {
    try {
      const idTraining = req.params.idTraining
      const idExercise = req.params.idExercise
      const data: ExerciseInterface = req.body
      const result = await TrainingController.updateEditExerciseTraining(idTraining, idExercise, data)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }

  // Remove um exercício de um treino
  static async updateRemoveExerciseTraining (req: Request, res: Response): Promise<Response> {
    try {
      const idTraining = req.params.idTraining
      const idExercise = req.params.idExercise
      const result = await TrainingController.updateRemoveExerciseTraining(idTraining, idExercise)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (err) {
      return ResponseResolver.ResponseErrors(res, err)
    }
  }
}// Fim da classe

export default TrainingResolver
