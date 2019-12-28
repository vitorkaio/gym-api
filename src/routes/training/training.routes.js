import express from 'express'
import * as TrainingResolver from './training.resolver'

const router = express.Router()

// GET /feed/posts
router.get('/', TrainingResolver.getTrainings)
router.post('/', TrainingResolver.createTraining)

/* router.get('/:id', CarsResolver.getCar)
router.post('/', CarsResolver.createCar)
router.delete('/:id', CarsResolver.deleteCar)
router.patch('/:id', CarsResolver.updateCar)

// Rotas com operações pela placa(read, delete and update)
router.get('/board/:board', CarsResolver.getCar)
router.delete('/board/:board', CarsResolver.deleteCar)
router.patch('/board/:board', CarsResolver.updateCar) */

export default router
