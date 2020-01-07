import * as AuthController from './auth.controller'
import { ResponseSuccess, ResponseErrors } from '../response/response'
import codes from '../response/code'

// login
export const login = async (req, res) => {
  try {
    const data = req.body
    const result = await AuthController.login(data)
    ResponseSuccess(res, codes.OK, result)
  } catch (error) {
    ResponseErrors(res, error)
  }
}
