import express from 'express'
import * as TrainingResolver from './training.resolver'

const router = express.Router()

// GET /feed/posts
router.get('/', TrainingResolver.getTrainings)

// Cria um novo treino
router.post('/', TrainingResolver.createTraining)

// Delete um treino
router.delete('/:id', TrainingResolver.removeTraining)

// Edita as informações de um treino
router.patch('/:id', TrainingResolver.updateEditTraining)

// Adiciona um exercício em um treino
router.patch('/:id/add/exercises', TrainingResolver.updateAddExerciseTraining)

// Edita um exercicío de um treino
router.patch('/:idTraining/edit/exercise/:idExercise', TrainingResolver.updateEditExerciseTraining)

// Remove um exercício de um treino
router.patch('/:idTraining/remove/exercise/:idExercise', TrainingResolver.updateRemoveExerciseTraining)

export default router
