import OsuService from "../services/osu.service";
import { Context } from "hono";
import { makeResponse } from "../libs";

export default class OsuController extends OsuService {
    public fetchUser = async (ctx: Context) => {
        try {
            const data = await this.getOsuSelf();
            return ctx.json(makeResponse(data));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchBestScores = async (ctx: Context) => {
        try {
            const data = await this.bestScoresSelf();
            return ctx.json(makeResponse(data));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchFavBeatmaps = async (ctx: Context) => {
        try {
            const data = await this.favouriteBeatmapsSelf();
            return ctx.json(makeResponse(data));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchRecentScores = async (ctx: Context) => {
        try {
            const data = await this.recentScoresSelf();
            return ctx.json(makeResponse(data));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };
}
