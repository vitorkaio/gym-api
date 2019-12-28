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

export const createTraining = async (req, res) => {
  const data = req.body
  try {
    const result = await TrainingController.createTraining(data)
    ResponseSuccess(res, codes.CREATE, result)
  } catch (err) {
    ResponseErrors(res, err)
  }
}
