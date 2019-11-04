import User from './user.query'
import Training from './training.query'
// import Perfil from './perfil.query'

 module.exports = {
    ...User,
    ...Training,
    // ...Perfil,
 }