import { Hono } from "hono";

import contact from "./contact.routes";
import ip from "./ip.routes";
import ping from "./ping.routes";
import upload from "./upload.routes";

const router = new Hono();

router.route("/ip", ip);
router.route("/ping", ping);
router.route("/upload", upload);
router.route("/contact", contact);

export default router;
