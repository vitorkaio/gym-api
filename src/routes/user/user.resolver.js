import * as UserController from './user.controller'
import { ResponseSuccess, ResponseErrors } from '../response/response'
import codes from '../response/code'
// import messages from '../response/messages'

// Retorna todos os usuários
export const getUsers = async (_, res) => {
  try {
    const result = await UserController.getUsers()
    ResponseSuccess(res, codes.OK, result)
  } catch (error) {
    ResponseErrors(res, error)
  }
}

// Retorna um usuário
export const getUser = async (req, res) => {
  try {
    const id = req.params.id
    const result = await UserController.getUser(id)
    ResponseSuccess(res, codes.OK, result)
  } catch (error) {
    ResponseErrors(res, error)
  }
}

// Cria um novo usuário
export const createuser = async (req, res) => {
  try {
    const data = req.body
    const result = await UserController.createUser(data)
    ResponseSuccess(res, codes.CREATE, result)
  } catch (error) {
    ResponseErrors(res, error)
  }
}

// Remove um usuário
export const removeUser = async (req, res) => {
  try {
    const id = req.params.id
    const result = await UserController.removeUser(id)
    ResponseSuccess(res, codes.OK, result)
  } catch (error) {
    ResponseErrors(res, error)
  }
}

// Atualiza as informações de um usuário
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const result = await UserController.updaterUser(id, data)
    ResponseSuccess(res, codes.OK, result)
  } catch (error) {
    ResponseErrors(res, error)
  }
}

// Adiciona um treino ao usuário
export const updateAddTrainingUser = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const result = await UserController.updateAddTrainingUser(id, data)
    ResponseSuccess(res, codes.OK, result)
  } catch (error) {
    ResponseErrors(res, error)
  }
}

// Remove um treino do usuário
export const removeTrainingUser = async (req, res) => {
  try {
    const userId = req.params.userId
    const trainingId = req.params.trainingId
    const result = await UserController.removeTrainingUser(userId, trainingId)
    ResponseSuccess(res, codes.OK, result)
  } catch (error) {
    ResponseErrors(res, error)
  }
}
