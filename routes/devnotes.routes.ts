import { Hono } from "hono";
import DevnotesController from "../controllers/devnotes.controller";

const router = new Hono();

const devnotesController = new DevnotesController();

router.get("/", devnotesController.getAll);
router.get("/:id", devnotesController.get);
router.post("/", devnotesController.create);
router.put("/:id", devnotesController.update);
router.delete("/:id", devnotesController.delete);

export default router;
