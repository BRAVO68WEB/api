import AuthController from '../controllers/auth.controller'
import { middleware, keyware } from '../auth'
import { Hono } from 'hono'

const router = new Hono()
const authController = new AuthController()

router.get('/signin', authController.signin)
router.get('/signin/cli', authController.signinCLI)
router.get('/signin/app', authController.signinAPP)
router.get('/signin/callback', authController.callback)
router.get('/signin/callback/cli', authController.callbackCLI)
router.get('/signin/callback/app', authController.callbackAPP)

router.get('/me', middleware, authController.me)
router.get('/logout', middleware, authController.logout)
router.post('/refresh', middleware, authController.refresh)

router.get('/introspect', middleware, authController.introspect)

router.put('/key', middleware, authController.createKey)
router.get('/key', middleware, authController.fetchKey)
router.delete('/key', middleware, authController.deleteKey)
router.post('/key/verify', authController.validateKeyBody)
router.get('/key/verify', keyware, authController.validateKeyHeader)

export default router
