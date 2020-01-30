import express from 'express'
import UserResolver from './user.resolver'

const router = express.Router()

// GET /feed/posts
router.get('/', UserResolver.getUsers)

// Pega um usuário
router.get('/:id', UserResolver.getUser)

// Cria um novo usuário
router.post('/', UserResolver.createuser)

// Remove um usuário
router.delete('/:id', UserResolver.removeUser)

// Atualiza as informações de um usuário
router.patch('/:id', UserResolver.updateUser)

// Adiciona um treino ao usuário
router.patch('/:id/add/training', UserResolver.updateAddTrainingUser)

// Remove um treino do usuário
router.patch('/:userId/remove/training/:trainingId', UserResolver.removeTrainingUser)

export default router
