import * as TrainingController from './training.controller'
import { ResponseSuccess, ResponseErrors } from '../response/response'
import codes from '../response/code'
// import messages from '../response/messages'

// Retorna todos os veículos
export const getTrainings = async (_, res) => {
  try {
    const result = await TrainingController.getTrainings()
    ResponseSuccess(res, codes.OK, result)
  } catch (err) {
    ResponseErrors(res, err)
  }
}

// Cria um novo treino
export const createTraining = async (req, res) => {
  try {
    const data = req.body
    const result = await TrainingController.createTraining(data)
    ResponseSuccess(res, codes.CREATE, result)
  } catch (err) {
    ResponseErrors(res, err)
  }
}

// Remove um treino
export const removeTraining = async (req, res) => {
  try {
    const id = req.params.id
    const result = await TrainingController.removeTraining(id)
    ResponseSuccess(res, codes.OK, result)
  } catch (err) {
    ResponseErrors(res, err)
  }
}

// Edita os dados de um treino
export const updateEditTraining = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const result = await TrainingController.updateEditTraining(id, data)
    ResponseSuccess(res, codes.OK, result)
  } catch (err) {
    ResponseErrors(res, err)
  }
}

// Adiciona um novo treino em um usuário já existente
export const updateAddExerciseTraining = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const result = await TrainingController.updateAddExerciseTraining(id, data)
    ResponseSuccess(res, codes.OK, result)
  } catch (err) {
    ResponseErrors(res, err)
  }
}

// Edita um exercicío de um treino
export const updateEditExerciseTraining = async (req, res) => {
  try {
    const idTraining = req.params.idTraining
    const idExercise = req.params.idExercise
    const data = req.body
    const result = await TrainingController.updateEditExerciseTraining(idTraining, idExercise, data)
    ResponseSuccess(res, codes.OK, result)
  } catch (err) {
    ResponseErrors(res, err)
  }
}

// Remove um exercício de um treino
export const updateRemoveExerciseTraining = async (req, res) => {
  try {
    const idTraining = req.params.idTraining
    const idExercise = req.params.idExercise
    const result = await TrainingController.updateRemoveExerciseTraining(idTraining, idExercise)
    ResponseSuccess(res, codes.OK, result)
  } catch (err) {
    ResponseErrors(res, err)
  }
}
