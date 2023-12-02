import { Hono } from "hono";

import ContactMeController from "../../controllers/contactme.controller";

const router = new Hono();
const cmController = new ContactMeController();

// router.get('/current', ipController.fetchCurrentIPInfo)
router.post("/", cmController.postQuery);

export default router;
