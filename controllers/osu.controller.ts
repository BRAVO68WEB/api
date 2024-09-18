import { Context } from "hono";

import { makeResponse } from "../libs";
import OsuService from "../services/osu.service";

await OsuService.init();

export default class OsuController extends OsuService {
    public static fetchUser = async (ctx: Context) => {
        try {
            const data = await OsuService.getOsuSelf();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Osu Stats", {}, "Failed", true), 401);
        }
    };

    public static fetchBestScores = async (ctx: Context) => {
        try {
            const data = await OsuService.bestScoresSelf();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Osu Stats", {}, "Failed", true), 401);
        }
    };

    public static fetchFavBeatmaps = async (ctx: Context) => {
        try {
            const data = await OsuService.favouriteBeatmapsSelf();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Osu Stats", {}, "Failed", true), 401);
        }
    };

    public static fetchRecentScores = async (ctx: Context) => {
        try {
            const data = await OsuService.recentScoresSelf();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Osu Stats", {}, "Failed", true), 401);
        }
    };
}
