import codes from './code'
import messages from './messages'

export const ResponseSuccess = (res, code, data) => {
  return res.status(code).json({
    msg: 'success',
    code,
    data
  })
}

export const ResponseFail = (res, code, err) => {
  const listErrors = []
  if (err instanceof Error) {
    for (const key in err.errors) {
      listErrors.push(err.errors[key].message)
    }
  }
  return res.status(code).json({
    msg: 'fail',
    code,
    data: listErrors.length === 0 ? err : listErrors
  })
}

// Gerencia as mensagens de erros
export const ResponseErrors = async (res, err) => {
  if (err === null) ResponseFail(res, codes.NOT_FOUND, null)
  else if (err.name === 'CastError') ResponseFail(res, codes.ERROR, messages.CAST_ID)
  else if (err.name === 'MongoError' && err.code === 11000) ResponseFail(res, codes.ERROR, err.errmsg)
  else ResponseFail(res, codes.ERROR, err)
}
