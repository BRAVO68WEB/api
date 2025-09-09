import { Hono } from "hono";

import ServerController from "../../controllers/server.controller";
import { withAuth } from "../../auth/auth.middleware";

const router = new Hono();
const serverController = new ServerController();

router.use(withAuth({
    requireAuth: true,
    requiredRoles: []
}))

router.post("/", serverController.add);
router.get("/:ip", serverController.get);
router.get("/", serverController.getAll);
router.delete("/:ip", serverController.delete);

export default router;
