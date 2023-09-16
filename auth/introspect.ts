import { authClient } from '../helpers/auth_client'
import { Context } from 'hono'

export const introspect = async (
    ctx: Context
) => {
    try {
        let authHeader = ctx.req.header('authorization') as string
        authHeader = authHeader.split(' ')[1]
        if (!authHeader) {
            throw new Error('No authorization header')
        }
        const token: string = authHeader
        const decoded = await authClient.introspect(token)

        if (!decoded) {
            throw new Error('No user')
        }

        return decoded
    } catch (err) {
        return ctx.json({
            message: "Invalid Token",
        })
    }
}
