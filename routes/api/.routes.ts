import { Router } from 'express'
import { makeResponse } from '../../libs'

const router: Router = Router()

router.get('/', (req, res) => {
    res.send(makeResponse({ message: 'Hello World me!' }))
})

router.all('/err', async (req, res, next) => {
    try {
        throw new Error('This is an error')
    } catch (err) {
        next(err)
    }
})

export default router
