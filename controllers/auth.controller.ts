import { Context } from "hono";

import {
    APIKey,
} from "../auth";
import { makeResponse } from "../libs";

export default class AuthController extends APIKey {
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
