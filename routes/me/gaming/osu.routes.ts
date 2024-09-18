import { Hono } from "hono";

import OsuController from "../../../controllers/osu.controller";

const router = new Hono();

router.get("/user", OsuController.fetchUser);
router.get("/best", OsuController.fetchBestScores);
router.get("/recent", OsuController.fetchRecentScores);
router.get("/fav", OsuController.fetchFavBeatmaps);

export default router;
