import { Context } from "hono";

import { makeResponse } from "../libs";
import HackTheBoxService from "../services/hackthebox.service";

export default class HackTheBoxController extends HackTheBoxService {
    public getProfile = async (ctx: Context) => {
        try {
            const id = 1367733;
            const data = await this.profile(id);
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching HackTheBox Stats", {}, "Failed", true), 401);
        }
    };

    public getActivity = async (ctx: Context) => {
        try {
            const id = 1367733;
            const data = await this.activity(id);
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching HackTheBox Stats", {}, "Failed", true), 401);
        }
    };

    public getMechines = async (ctx: Context) => {
        try {
            const id = 1367733;
            const data = await this.mechines(id);
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching HackTheBox Stats", {}, "Failed", true), 401);
        }
    };

    public getChallenges = async (ctx: Context) => {
        try {
            const id = 1367733;
            const data = await this.challenges(id);
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching HackTheBox Stats", {}, "Failed", true), 401);
        }
    };
}
