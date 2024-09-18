import { Hono } from "hono";

import { Callback, LoginUrl, Logout,UserInfo } from "../auth/auth.controller";
import { withAuth } from "../auth/auth.middleware";

const router = new Hono();

router.all("/login", LoginUrl);
router.all("/callback", Callback);
router.all("/whoami", withAuth({
    requireAuth: true,
    requiredRoles: []
}), UserInfo);
router.all("/logout", Logout);

export default router;