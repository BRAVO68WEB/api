import { Context } from "hono";

import { makeResponse } from "../libs";
import WakatimeService from "../services/wakatime.service";

export default class Wakatime extends WakatimeService {
    public profile = async (ctx: Context) => {
        try {
            const data = await this.getWakatimeStats();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Wakatime Stats", {}, "Failed", true), 401);
        }
    };

    public last7DaysLanguages = async (ctx: Context) => {
        try {
            const data = await this.getWakatimeLanguageUsageInLast7Days();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Wakatime Stats", {}, "Failed", true), 401);
        }
    };

    public last7DaysCode = async (ctx: Context) => {
        try {
            const data = await this.getWakatimeCodeStatsLast7Days();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Wakatime Stats", {}, "Failed", true), 401);
        }
    };

    public allTimeCode = async (ctx: Context) => {
        try {
            const data = await this.getWakatimeCodeStatesAllTime();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Wakatime Stats", {}, "Failed", true), 401);
        }
    };
}
