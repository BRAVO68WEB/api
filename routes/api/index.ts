import { Hono } from "hono";

import ip from "./ip.routes";
import ping from "./ping.routes";
import upload from "./upload.routes";

const router = new Hono();

router.route("/ip", ip);
router.route("/ping", ping);
router.route("/upload", upload);

export default router;
