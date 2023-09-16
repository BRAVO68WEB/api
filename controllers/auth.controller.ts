import { makeResponse } from '../libs'
import { Context } from 'hono'
import {
    callbackOn,
    introspect,
    refresh,
    signon,
    revoke,
    APIKey,
    signonCLI,
    callbackCLI,
    signonApp,
    callbackApp,
} from '../auth'

export default class AuthController extends APIKey {
    public signin = (ctx: Context) => {
        const { authurl } = signon()
        return ctx.redirect(authurl)
    }

    public signinCLI = (ctx: Context) => {
        const { authurl } = signonCLI()
        return ctx.redirect(authurl)
    }

    public signinAPP = (ctx: Context) => {
        const { authurl } = signonApp()
        return ctx.redirect(authurl)
    }

    public callback = async (ctx: Context) => {
        try {
            const { session_state, code } = ctx.req.query()
            const response = await callbackOn(session_state, code)
            return ctx.json(makeResponse(response))
        }
        catch (err) {
            console.log(err)
            return ctx.json(makeResponse("Callback Failed", {}, 'Failed', true))
        }
    }

    public callbackCLI = async (ctx: Context) => {
        const { session_state, code } = ctx.req.query()
        return ctx.json(makeResponse(await callbackCLI(session_state, code)))
    }

    public callbackAPP = async (ctx: Context) => {
        const { session_state, code } = ctx.req.query()
        return ctx.json(makeResponse(await callbackApp(session_state, code)))
    }

    public me = (ctx: Context) => {
        const user = ctx.get('user')
        return ctx.json(makeResponse(user.userData))
    }

    public logout = async (ctx: Context) => {
        return ctx.json(makeResponse(await revoke(ctx)))
    }

    public refresh = async (
        ctx: Context
    ) => {
        return ctx.json(makeResponse(await refresh(ctx)))
    }

    public introspect = async (
        ctx: Context
    ) => {
        return ctx.json(makeResponse(await introspect(ctx)))
    }

    public createKey = async (ctx: Context) => {
        const user = ctx.get('user')
        return ctx.json(
            makeResponse(await this.createKeyS(user.userData.sub))
        )
    }

    public fetchKey = async (ctx: Context) => {
        const user = ctx.get('user')
        return ctx.json(makeResponse(await this.fetchKeyS(user.userData.sub)))
    }

    public deleteKey = async (ctx: Context) => {
        const user = ctx.get('user')
        return ctx.json(
            makeResponse(await this.deleteKeyS(user.userData.sub))
        )
    }

    public validateKey = async (ctx: Context) => {
        let fail_attempt = false
        if (ctx.req.method === 'POST') {
            let api_key
            const body = await ctx.req.json()
            api_key = body.api_key
            if (!api_key) {
                fail_attempt = true
            }
            if (fail_attempt) {
                return ctx.json(
                    makeResponse('No API Key provided !!', {}, 'Failed', true)
                )
            }
            else {
                const valData = await this.validateKeyS(api_key)
                return ctx.json(makeResponse(valData))
            }
        } else if (ctx.req.method === 'GET') {
            let api_key
            api_key = ctx.req.header('x-api-key')
            if (!api_key) {
                fail_attempt = true
            }
            if (fail_attempt) {
                return ctx.json(
                    makeResponse('No API Key provided !!', {}, 'Failed', true)
                )
            }
            else {
                const valData = await this.validateKeyS(api_key)
                return ctx.json(makeResponse(valData))
            }
        } else {
            return ctx.json(
                makeResponse('Invalid Request Method !!', {}, 'Failed', true)
            )
        }
    }
}
