import { Hono } from "hono";

import ip from "./ip.routes";
import ping from "./ping.routes";
import upload from "./upload.routes";
import contact from "./contact.routes";

const router = new Hono();

router.route("/ip", ip);
router.route("/ping", ping);
router.route("/upload", upload);
router.route("/contact", contact);

export default router;
