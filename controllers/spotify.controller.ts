import SpotifyService from "../services/spotify.service";
import { Context } from "hono";
import { makeResponse } from "../libs";

export default class SpotifyController extends SpotifyService {
    public login = async (ctx: Context) => {
        const data = await this.loginAuth();
        return ctx.redirect(data);
    };

    public loginCallback = async (ctx: Context) => {
        const { code } = ctx.req.query();
        const data = await this.loginAuthCallback(code);
        return ctx.json(data);
    };

    public fetchSpotifyTopSongs = async (ctx: Context) => {
        try {
            const data = await this.getSpotifyTopSongs();
            ctx.json(makeResponse(data));
        } catch (err: any) {
            ctx.json(makeResponse(err.message, {}, "Failed", true), 401);
        }
    };
}
