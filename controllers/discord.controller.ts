import DiscordService from "../services/discord.service";
import { Context } from "hono";
import { makeResponse } from "../libs";

export default class DiscordController extends DiscordService {
    public getActivity = async (ctx: Context) => {
        try {
            const data = await this.activity();
            return ctx.json(makeResponse(data));
        } catch (err: any) {
            return ctx.json(makeResponse(err.message, {}, "Failed", true));
        }
    };

    public getBanner = async (ctx: Context) => {
        try {
            const data = await this.banner();
            return ctx.text(data, {
                headers: {
                    "content-type": "image/svg+xml; charset=utf-8",
                }
            });
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true));
        }
    };

    public getProfile = async (ctx: Context) => {
        try {
            const data = await this.profile();
            return ctx.json(makeResponse(data));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true));
        }
    };

    public getPresence = async (ctx: Context) => {
        try {
            const data = await this.presence();
            return ctx.json(makeResponse(data));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true));
        }
    };
}
