/* eslint-disable @typescript-eslint/no-explicit-any */
import Codes from './code'
// import Messages from './messages'
import { Response } from 'express'
import Messages from './messages'

class ResponseResolver {
  static async responseSuccess (res: Response, code: Codes, data: any): Promise<Response> {
    return res.status(code).json({
      msg: 'success',
      code,
      data
    })
  }

  static async responseFail (res: Response, code: Codes, err: Error): Promise<Response> {
    return res.status(code).json({
      msg: 'fail',
      code,
      data: err.message ? err.message : err
    })
  }

  static async ResponseErrors (res: Response, err: Error): Promise<Response> {
    if (err === null) return this.responseFail(res, Codes.NOT_FOUND, new Error(Messages.NOT_FOUND))
    else if (err.name === 'CastError') return this.responseFail(res, Codes.ERROR, new Error(Messages.CAST_ID))
    else if (err.name === 'MongoError') return this.responseFail(res, Codes.ERROR, err)
    else return this.responseFail(res, Codes.ERROR, err)
  }
}// Fim da classe

export default ResponseResolver
