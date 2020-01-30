import AuthController from './auth.controller'
import { Response, Request } from 'express'
import ResponseResolver from '../response/response'
import Codes from '../response/code'
import { AuthInterface } from './auth.interface'

class AuthResolver {
  // login
  static async login (req: Request, res: Response): Promise<Response> {
    try {
      const data: AuthInterface = req.body
      const result = await AuthController.login(data.username, data.password)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (error) {
      return ResponseResolver.ResponseErrors(res, error)
    }
  }

  // login adm
  static async loginAdm (req: Request, res: Response): Promise<Response> {
    try {
      const data: AuthInterface = req.body
      const result = await AuthController.loginAdm(data.username, data.password)
      return ResponseResolver.responseSuccess(res, Codes.OK, result)
    } catch (error) {
      return ResponseResolver.ResponseErrors(res, error)
    }
  }
} // Fim da classe

export default AuthResolver
