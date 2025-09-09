import { Hono } from "hono";

import contact from "./contact.routes";
import ip from "./ip.routes";
import ping from "./ping.routes";
import server from "./server.route";

const router = new Hono();

router.route("/ip", ip);
router.route("/ping", ping);
router.route("/contact", contact);
router.route("/server", server);

export default router;
