import { Hono } from "hono";
import HashnodeController from "../../controllers/hashnode.controller";

const router = new Hono();
const { getProfile } = new HashnodeController();

router.get("/", getProfile);

export default router;
