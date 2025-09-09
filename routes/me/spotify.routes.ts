import { Hono } from "hono";

import SpotifyController from "../../controllers/spotify.controller";
import { withFF } from "../../configs/features/ff.middleware";
import { FEATURE_FLAGS } from "../../configs/features/contrants";

const router = new Hono();
const { fetchSpotifyTopSongs } = new SpotifyController();

router.use(withFF({ featureName: FEATURE_FLAGS.SPOTIFY }));

router.get("/top", fetchSpotifyTopSongs);

export default router;
