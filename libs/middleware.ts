import { Context } from 'hono'

export const notFoundHandler = async (
    ctx: Context,
) => {
    return ctx.json({
        message: 'Not Found'
    }, 404)
}