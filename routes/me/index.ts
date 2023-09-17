import { Hono } from "hono";

import discord from './discord.routes';

const router = new Hono();

router.route("/discord", discord);

export default router;
