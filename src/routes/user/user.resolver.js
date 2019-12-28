import * as UserController from './user.controller'
import { ResponseSuccess, ResponseErrors } from '../response/response'
import codes from '../response/code'
// import messages from '../response/messages'

// Retorna todos os veículos
export const getUsers = async (_, res) => {
  try {
    const result = await UserController.getUsers()
    ResponseSuccess(res, codes.OK, result)
  } catch (err) {
    ResponseErrors(res, err)
  }
}
