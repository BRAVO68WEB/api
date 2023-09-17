import { Hono } from "hono";

import csgo from "./csgo.routes";
import osu from "./osu.routes";
import rl from "./rl.routes";

const router = new Hono();

router.route("/osu", osu);
router.route("/rl", rl);
router.route("/csgo", csgo);

export default router;
