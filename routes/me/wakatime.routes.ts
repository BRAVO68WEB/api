import { Hono } from "hono";

import WakatimeController from "../../controllers/wakatime.controller";

const router = new Hono();
const {
    allTimeCode,
    last7DaysCode,
    last7DaysLanguages,
    profile,
} = new WakatimeController();

router.get("/", profile);
router.get("/LanguageUsageInLast7Days", last7DaysLanguages);
router.get("/codeStatsLast7Days", last7DaysCode);
router.get("/codeTimeAllTime", allTimeCode);

export default router;
