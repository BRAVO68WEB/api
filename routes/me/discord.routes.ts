import { Hono } from "hono";

import DiscordController from "../../controllers/discord.controller";
import { withFF } from "../../configs/features/ff.middleware";
import { FEATURE_FLAGS } from "../../configs/features/contrants";

const router = new Hono();
const { getProfile, getBanner, getActivity, getPresence } = new DiscordController();

router.use(withFF({ featureName: FEATURE_FLAGS.DISCORD }));

router.get("/profile", getActivity);
router.get("/banner", getBanner);

router.get("/v2/profile", getProfile);
router.get("/v2/activity", getPresence);

export default router;
