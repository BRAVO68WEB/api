import { Context } from "hono";

import { makeResponse } from "../libs";
import DiscordService from "../services/discord.service";

export default class DiscordController extends DiscordService {
    public getActivity = async (ctx: Context) => {
        try {
            const data = await this.activity();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error Fetching Discord Activity", {}, "Failed", true));
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
        } catch {
            return ctx.json(makeResponse("Error Fetching Discord Banner", {}, "Failed", true));
        }
    };

    public getProfile = async (ctx: Context) => {
        try {
            const data = await this.profile();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error Fetching Discord Profile", {}, "Failed", true));
        }
    };

    public getPresence = async (ctx: Context) => {
        try {
            const data = await this.presence();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error Fetching Discord Presence", {}, "Failed", true));
        }
    };
}
