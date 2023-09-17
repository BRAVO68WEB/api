import { Context } from "hono";

import { makeResponse } from "../libs";
import TwitterService from "../services/twitter.service";

export default class TwitterController extends TwitterService {
    public getTweets = async (ctx: Context) => {
        try {
            const data = await this.getSelfUserTweets();
            return ctx.json(data);
        } catch {
            return ctx.json(makeResponse("Error with Twitter API", {}, "Failed", true), 401);
        }
    };

    public getProfile = async (ctx: Context) => {
        try {
            const data = await this.getSelfUserProfile();
            return ctx.json(data);
        } catch {
            return ctx.json(makeResponse("Error with Twitter API", {}, "Failed", true), 401);
        }
    };
}
