import { Hono } from "hono";

import osu from './osu.routes';
import rl from './rl.routes';
import csgo from './csgo.routes';

const router = new Hono();

router.route("/osu", osu);
router.route("/rl", rl);
router.route("/csgo", csgo);

export default router;
