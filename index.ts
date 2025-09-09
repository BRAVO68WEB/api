import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { requestId } from "hono/request-id";

import "./configs";

import cacheClient from "./helpers/cache.factory";
import discordBotConnect from "./helpers/discord_bot_client";
import { Mailer } from "./helpers/mailer";
import { notFoundHandler } from "./libs";
import pkg from "./package.json" assert { type: "json" };
import routes from "./routes";

export const app = new Hono();

console.log("🚀", "@b68/api", "v" + pkg.version);

cacheClient.init();

discordBotConnect();
await Mailer.initialize();

app.use(
    "*",
    cors({
        origin: "*",
        allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
        credentials: true,
        maxAge: 86_400,
    }),
);

app.use("*", requestId());
app.use("*", logger());

console.log("☄", "Base Route", "/");

app.route("/", routes);

app.use(
    "*",
    serveStatic({
        root: "public",
    }),
);

app.use("*", notFoundHandler);

export default app;
