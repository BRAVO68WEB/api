import { Hono } from "hono";
import { oidcAuthMiddleware } from "@hono/oidc-auth";

import { keyware,middleware } from "../auth";
import AuthController from "../controllers/auth.controller";

const router = new Hono();
const authController = new AuthController();

router.put("/key", middleware, authController.createKey);
router.get("/key", middleware, authController.fetchKey);
router.delete("/key", middleware, authController.deleteKey);
router.post("/key/verify", authController.validateKeyBody);
router.get("/key/verify", keyware, authController.validateKeyHeader);

router.get("/callback", authController.callback);
router.get("/logout", middleware, authController.logout);

router.use('*', oidcAuthMiddleware());

export default router;
