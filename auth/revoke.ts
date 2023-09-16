import { authClient } from '../helpers/auth_client'
import { Context } from 'hono'

export const revoke = async (
    ctx: Context,
) => {
    try {
        let authHeader = ctx.req.header('authorization') as string
        authHeader = authHeader.split(' ')[1]
        if (!authHeader) {
            throw new Error('No authorization header')
        }
        const token: string = authHeader
        await authClient.revoke(token)
        return 'Token revoked! Logged out!'
    } catch (err) {
        return ctx.json({
            message: "Invalid Token",
        })
    }
}
