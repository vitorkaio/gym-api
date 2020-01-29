import User from '../user/user.model'
import * as Services from '../../services/services'

// Verifica se o usuário está cadastrado.
export const login = async ({ username, password }) => {
  try {
    const user = await User.findOne({ username })
    if (user) {
      // Verifica se as senhas batem.
      const isEqual = await Services.compare(password, user.password)
      if (isEqual) {
        return user.id
      } else {
        const message = { message: null }
        throw (message)
      }
    } else {
      const message = { message: null }
      throw (message)
    }
  } catch (error) {
    throw (error.message)
  }
}

// Verifica se o usuário está cadastrado e é adm.
export const loginAdm = async ({ username, password }) => {
  try {
    const user = await User.findOne({ username })
    if (user && user.perfil === 'adm') {
      // Verifica se as senhas batem.
      const isEqual = await Services.compare(password, user.password)
      if (isEqual) {
        return user.id
      } else {
        const message = { message: null }
        throw (message)
      }
    } else {
      const message = { message: null }
      throw (message)
    }
  } catch (error) {
    throw (error.message)
  }
}
