import LastfmService from "../services/lastfm.service";
import { Context } from "hono";
import { makeResponse } from "../libs";

export default class LastFMController extends LastfmService {
    public fetchUser = async (ctx: Context) => {
        try {
            const data = await this.user();
            return ctx.json(makeResponse(data));
        } catch (err: any) {
            return ctx.json(makeResponse(err.message, {}, "Failed", true), 401);
        }
    };

    public fetchTop = async (ctx: Context) => {
        try {
            const data = await this.top();
            return ctx.json(makeResponse(data));
        } catch (err: any) {
            return ctx.json(makeResponse(err.message, {}, "Failed", true), 401);
        }
    };

    public fetchLoved = async (ctx: Context) => {
        try {
            const data = await this.loved();
            return ctx.json(makeResponse(data));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchCurrent = async (ctx: Context) => {
        const data = await this.current();
        return ctx.json(data);
    };
}
