import { Hono } from "hono";
import VSCodeController from "../../controllers/vscode.controller";

const { fetchList } = new VSCodeController();

const router = new Hono();

router.get("/", fetchList);

export default router;
