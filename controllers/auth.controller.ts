import { Context } from "hono";

import {
    APIKey,
    callbackApp,
    callbackCLI,
    callbackOn,
    introspect,
    refresh,
    revoke,
    signon,
    signonApp,
    signonCLI,
} from "../auth";
import { makeResponse } from "../libs";

export default class AuthController extends APIKey {
    public signin = (ctx: Context) => {
        const { authurl } = signon();
        return ctx.redirect(authurl);
    };

    public signinCLI = (ctx: Context) => {
        const { authurl } = signonCLI();
        return ctx.redirect(authurl);
    };

    public signinAPP = (ctx: Context) => {
        const { authurl } = signonApp();
        return ctx.redirect(authurl);
    };

    public callback = async (ctx: Context) => {
        try {
            const { code } = ctx.req.query();
            const response = await callbackOn(code);
            return ctx.json(makeResponse(response));
        } catch (error) {
            console.log(error);
            return ctx.json(makeResponse("Callback Failed", error, "Failed", true));
        }
    };

    public callbackCLI = async (ctx: Context) => {
        const { session_state, code } = ctx.req.query();
        return ctx.json(makeResponse(await callbackCLI(session_state, code)));
    };

    public callbackAPP = async (ctx: Context) => {
        const { session_state, code } = ctx.req.query();
        return ctx.json(makeResponse(await callbackApp(session_state, code)));
    };

    public me = (ctx: Context) => {
        const user = ctx.get("user");
        return ctx.json(makeResponse(user.userData));
    };

    public logout = async (ctx: Context) => {
        return ctx.json(makeResponse(await revoke(ctx)));
    };

    public refresh = async (ctx: Context) => {
        return ctx.json(makeResponse(await refresh(ctx)));
    };

    public introspect = async (ctx: Context) => {
        return ctx.json(makeResponse(await introspect(ctx)));
    };

    public createKey = async (ctx: Context) => {
        const user = ctx.get("user");
        return ctx.json(makeResponse(await this.createKeyS(user.userData.sub)));
    };

    public fetchKey = async (ctx: Context) => {
        const user = ctx.get("user");
        return ctx.json(makeResponse(await this.fetchKeyS(user.userData.sub)));
    };

    public deleteKey = async (ctx: Context) => {
        const user = ctx.get("user");
        return ctx.json(makeResponse(await this.deleteKeyS(user.userData.sub)));
    };

    public validateKeyHeader = async (ctx: Context) => {
        const api_key = ctx.req.header("x-api-key");
        if (api_key) {
            const valData = await this.validateKeyS(api_key);
            return ctx.json(makeResponse(valData));
        } else {
            return ctx.json(makeResponse("No API Key provided !!", {}, "Failed", true));
        }
    };

    public validateKeyBody = async (ctx: Context) => {
        const body = await ctx.req.json();
        const api_key = body.api_key;
        if (api_key) {
            const valData = await this.validateKeyS(api_key);
            return ctx.json(makeResponse(valData));
        } else {
            return ctx.json(makeResponse("No API Key provided !!", {}, "Failed", true));
        }
    };
}
