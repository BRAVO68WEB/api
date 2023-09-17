import { Hono } from "hono";
import MastodonController from "../../controllers/mastodon.controller";

const { fetchMastodonProfile, fetchMastodonStatuses } = new MastodonController();

const router = new Hono();

router.get("/profile", fetchMastodonProfile);
router.get("/statuses", fetchMastodonStatuses);

export default router;
