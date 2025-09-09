import { Hono } from "hono";

import HashnodeController from "../../controllers/hashnode.controller";
import { withFF } from "../../configs/features/ff.middleware";
import { FEATURE_FLAGS } from "../../configs/features/contrants";

const router = new Hono();
const { getProfile } = new HashnodeController();

router.use(withFF({ featureName: FEATURE_FLAGS.HASHNODE }));

router.get("/", getProfile);

export default router;
