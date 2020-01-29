import express from 'express'
import * as AuthResolver from './auth.resolver'

const router = express.Router()

// GET /auth/login
router.post('/login', AuthResolver.login)

// GET /auth/loginadm
router.post('/loginadm', AuthResolver.loginAdm)

export default router
