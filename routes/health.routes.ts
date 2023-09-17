import { Context,Hono } from "hono";

const router = new Hono();
import pkg from "../package.json" assert { type: "json" };

router.get("/", (ctx: Context) =>
    ctx.json({
        status: "OK",
        app: "B68 API",
        version: pkg.version,
        uptime: process.uptime(),
        hrtime: process.hrtime(),
    }),
);

export default router;
