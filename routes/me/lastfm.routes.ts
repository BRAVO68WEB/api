import { Hono } from "hono";

import LastFMController from "../../controllers/lastfm.controller";
import { withFF } from "../../configs/features/ff.middleware";
import { FEATURE_FLAGS } from "../../configs/features/contrants";

const { fetchTop, fetchCurrent, fetchLoved, fetchUser } = new LastFMController();

const router = new Hono();

router.use(withFF({ featureName: FEATURE_FLAGS.LASTFM }));

router.get("/", fetchUser);
router.get("/top", fetchTop);
router.get("/loved", fetchLoved);
router.all("/current", fetchCurrent);

export default router;
