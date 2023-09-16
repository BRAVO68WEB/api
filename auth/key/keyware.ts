import { Context, Next } from 'hono'
import { APIKey } from './apikey'
import ServiceAccount from '../server/service'

export const serviceAccount = new ServiceAccount()

export const keyware = async (
    ctx: Context,
    next: Next
) => {
    const authClient = new APIKey()
    try {
        const authHeader = ctx.req.header('x-api-key') as string
        if (!authHeader) {
            throw new Error('No x-api-key header found !!')
        }
        const decoded = await authClient.validateKeyS(authHeader)

        if (!decoded.isValid) {
            throw new Error('Invalid token')
        }

        const { service_creds } = await serviceAccount.serviceAccount()
        const user = await serviceAccount.fetchUser(
            service_creds,
            decoded.userSub
        )

        if (!user) {
            throw new Error('No user')
        }

        const { attributes } = user
        if (attributes) {
            Object.keys(attributes).forEach((key) => {
                user[key] = attributes[key][0]
            })
        }

        ctx.set('user', {
            userData: user,
            tokenData: decoded,
        })

        await next()
    } catch (err) {
        return ctx.json({
            message: "You're not authorized to access this resource",
        })
    }
}
