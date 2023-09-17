import { Router } from "express";
import HashnodeController from "../../controllers/hashnode.controller";

const router: Router = Router();
const { getProfile } = new HashnodeController();

router.get("/", getProfile);

export default router;
