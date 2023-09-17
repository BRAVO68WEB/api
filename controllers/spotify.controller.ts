import { Context } from "hono";

import { makeResponse } from "../libs";
import SpotifyService from "../services/spotify.service";

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
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Spotify Top songs", {}, "Failed", true), 401);
        }
    };
}
