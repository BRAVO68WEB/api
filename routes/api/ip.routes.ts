import { Hono } from "hono";

import IPController from "../../controllers/ipinfo.controller";

const router = new Hono();
const ipController = new IPController();

// router.get('/current', ipController.fetchCurrentIPInfo)
router.get("/:ip", ipController.fetchIPInfo);

export default router;
