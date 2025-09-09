import { Hono } from "hono";

import HackTheBoxController from "../../controllers/hackthebox.controller";
import { withFF } from "../../configs/features/ff.middleware";
import { FEATURE_FLAGS } from "../../configs/features/contrants";

const router = new Hono();
const { getActivity, getChallenges, getMechines, getProfile } = new HackTheBoxController();

router.use(withFF({ featureName: FEATURE_FLAGS.HTB }));

router.get("/profile", getProfile);
router.get("/activity", getActivity);
router.get("/challenges", getChallenges);
router.get("/machines", getMechines);

export default router;
