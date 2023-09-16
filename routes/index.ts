import { Hono } from 'hono'

import health from './health.routes'
import devnotes from './devnotes.routes'
import dev from './dev.routes'
import auth from './auth.routes'

const router = new Hono()

router.route('/health', health)
router.route('/devnotes', devnotes)
router.route('/dev', dev)
router.route('/auth', auth)

export default router
