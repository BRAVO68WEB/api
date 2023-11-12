import { Hono } from "hono";

import HackTheBoxController from "../../controllers/hackthebox.controller";

const router = new Hono();
const { getActivity, getChallenges, getMechines, getProfile } = new HackTheBoxController();

router.get("/profile", getProfile);
router.get("/activity", getActivity);
router.get("/challenges", getChallenges);
router.get("/machines", getMechines);

export default router;
