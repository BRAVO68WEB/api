import { Context, Hono } from "hono";
import { makeResponse } from "../libs";
import SpotifyController from "../controllers/spotify.controller";

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
    } catch (err) {
        return ctx.json(err);
    }
});

export default router;
