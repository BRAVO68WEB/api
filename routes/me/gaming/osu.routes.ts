import { Hono } from "hono";

import OsuController from "../../../controllers/osu.controller";

const router = new Hono();

const { fetchBestScores, fetchFavBeatmaps, fetchRecentScores, fetchUser } = new OsuController();

router.get("/user", fetchUser);
router.get("/best", fetchBestScores);
router.get("/recent", fetchRecentScores);
router.get("/fav", fetchFavBeatmaps);

export default router;
