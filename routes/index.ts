import { Hono } from "hono";

import appRouter from "../app/main";
import api from "./api";
import auth from "./auth.routes";
import dev from "./dev.routes";
import devnotes from "./devnotes.routes";
import health from "./health.routes";
import me from "./me";

const router = new Hono();

router.route("/health", health);
router.route("/devnotes", devnotes);
router.route("/dev", dev);
router.route("/auth", auth);
router.route("/me", me);
router.route("/api", api);
router.route("/", appRouter);

export default router;
