import * as UserController from '../../controllers/user.controller'

export default {
  async users(_, __) {
    return UserController.getUsers()
  },
 /*  async user(_, { filter }, context) {
		context && context.validUserFilter(filter)
    return UserController.findUser(filter)
  },
	// Retorna todos os usários com o perfil passado
  async usersWithPerfil(_, { namePerfil }, context) {
		context && context.validUser()
    return UserController.usersWithPerfil(namePerfil)
  },

  // Login do usuário
  async login(_, { filter }) {
    const user = await UserController.findUser(filter)
    
    if (!user) {
      throw new Error('Email/Password invalid!')
    }

    const passwordValid = await compare(filter.password, user.password)

    if (!passwordValid) {
      throw new Error('Email/Password invalid!')
    }

    return getUserLogged(user)

  } */
}