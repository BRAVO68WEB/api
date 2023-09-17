import { Hono } from "hono";
import TwitterController from "../../controllers/twitter.controller";

const router = new Hono();
const { getProfile, getTweets } = new TwitterController();

router.get("/profile", getProfile);
router.get("/tweets", getTweets);

export default router;
