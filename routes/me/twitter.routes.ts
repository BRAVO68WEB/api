import { Hono } from "hono";

import TwitterController from "../../controllers/twitter.controller";
import { withFF } from "../../configs/features/ff.middleware";
import { FEATURE_FLAGS } from "../../configs/features/contrants";

const router = new Hono();
const { getProfile, getTweets } = new TwitterController();

router.use(withFF({ featureName: FEATURE_FLAGS.TWITTER }));

router.get("/profile", getProfile);
router.get("/tweets", getTweets);

export default router;
