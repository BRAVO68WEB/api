import { Hono } from "hono";
import UploadController from "../../controllers/upload.controller";

const router = new Hono();
const uploadController = new UploadController();

router.post("/", uploadController.upload);
export default router;
