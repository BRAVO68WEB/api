import { Hono } from "hono";
import SpotifyController from "../../controllers/spotify.controller";

const router = new Hono();
const { fetchSpotifyTopSongs } = new SpotifyController();

router.get("/top", fetchSpotifyTopSongs);

export default router;
