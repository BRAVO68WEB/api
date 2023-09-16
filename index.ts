// import 'dotenv/config'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { serveStatic } from 'hono/bun'

import { hgqlInit } from './helpers'
import cacheClient from './helpers/cache.factory'
import routes from './routes'
// import { errorHandler, notFoundHandler } from './libs'
import pkg from './package.json' assert { type: 'json' }
import './configs'
import discordBotConnect from './helpers/discord_bot_client'

export const app = new Hono()

console.log('🚀', '@b68/api', 'v' + pkg.version)

hgqlInit()
cacheClient.init()

discordBotConnect()

app.use("*", cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    credentials: true,
    maxAge: 86400,
}))

app.use("*", logger())
  
console.log('☄ ', 'Base Route', '/')

app.route('/', routes)

app.use("*", serveStatic({
    root: 'public',
}))

// app.listen(process.env.PORT, () => {
//     console.log(`\n🌈 Server running at http://localhost:${process.env.PORT}`)
// })

export default app