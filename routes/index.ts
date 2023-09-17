import { Hono } from 'hono'

import appRouter from '../app/main'
import me from './me'
import api from './api'

import health from './health.routes'
import devnotes from './devnotes.routes'
import dev from './dev.routes'
import auth from './auth.routes'

const router = new Hono()

router.route('/health', health)
router.route('/devnotes', devnotes)
router.route('/dev', dev)
router.route('/auth', auth)
router.route('/me', me)
router.route('/api', api)
router.route('/', appRouter)

export default router
