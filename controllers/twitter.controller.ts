import { Context } from "hono";
import { makeResponse } from "../libs";
import TwitterService from "../services/twitter.service";

export default class TwitterController extends TwitterService {
    public getTweets = async (ctx: Context) => {
        try {
            const data = await this.getSelfUserTweets();
            return ctx.json(data);
        } catch (err: any) {
            return ctx.json(makeResponse(err.message, {}, "Failed", true), 401);
        }
    };

    public getProfile = async (ctx: Context) => {
        try {
            const data = await this.getSelfUserProfile();
            return ctx.json(data);
        } catch (err: any) {
            return ctx.json(makeResponse(err.message, {}, "Failed", true), 401);
        }
    };
}
