import { Context } from "hono";
import { makeResponse } from "../libs";
import MastodonService from "../services/mastodon.service";

export default class MastodonController extends MastodonService {
    public fetchMastodonProfile = async (ctx: Context) => {
        try {
            const data = await this.getMastodonProfile();
            return ctx.json(makeResponse(data));
        } catch (err: any) {
            return ctx.json(makeResponse(err.message, {}, "Failed", true), 401);
        }
    };

    public fetchMastodonStatuses = async (ctx: Context) => {
        try {
            const data = await this.getMastodonStatuses();
            return ctx.json(makeResponse(data));
        } catch (err: any) {
            return ctx.json(makeResponse(err.message, {}, "Failed", true), 401);
        }
    };
}
