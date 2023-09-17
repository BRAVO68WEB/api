import { Context, Hono } from "hono";

import SpotifyController from "../controllers/spotify.controller";
import { makeResponse } from "../libs";

const router = new Hono();
const { login, loginCallback } = new SpotifyController();

router.get("/", (ctx: Context) => {
    return ctx.json(makeResponse({ message: "Hello World!" }));
});

router.get("/spotify", login);
router.get("/spotify/callback", loginCallback);

router.all("/err", (ctx: Context) => {
    try {
        throw new Error("This is an error");
    } catch (error) {
        return ctx.json(error);
    }
});

export default router;
