import { Context } from "hono";

import { makeResponse } from "../libs";
import LastfmService from "../services/lastfm.service";

export default class LastFMController extends LastfmService {
    public fetchUser = async (ctx: Context) => {
        try {
            const data = await this.user();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching User", {}, "Failed", true), 401);
        }
    };

    public fetchTop = async (ctx: Context) => {
        try {
            const data = await this.top();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Top songs", {}, "Failed", true), 401);
        }
    };

    public fetchLoved = async (ctx: Context) => {
        try {
            const data = await this.loved();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Loved songs", {}, "Failed", true), 401);
        }
    };

    public fetchCurrent = async (ctx: Context) => {
        try {
            const data = await this.current();
            return ctx.json(data);
        }
        catch {
            return ctx.json(makeResponse("Error fetching current status", {}, "Failed", true), 401);
        }
    };
}
