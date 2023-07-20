import { Router } from 'express'
import pkg from '../package.json' assert { type: 'json' }

const router: Router = Router()

router.use('/', (req, res) => {
    return res.status(200).json({
        status: 'OK',
        app: 'B68 API',
        version: pkg.version,
        request_ip: req.ip,
        uptime: process.uptime(),
        hrtime: process.hrtime(),
    })
})

export default router
