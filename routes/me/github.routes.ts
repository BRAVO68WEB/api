import { Hono } from "hono";

import GithubController from "../../controllers/github.controller";
import { withFF } from "../../configs/features/ff.middleware";
import { FEATURE_FLAGS } from "../../configs/features/contrants";

const router = new Hono();
const {
    fetchSelfGithubUser,
    fetchSelfGithubUserEvents,
    fetchSelfGithubUserFollowers,
    fetchSelfGithubUserFollowing,
    fetchSelfGithubUserGists,
    fetchSelfGithubUserRepos,
    fetchSelfGithubUserStarred,
} = new GithubController();

router.use(withFF({ featureName: FEATURE_FLAGS.GITHUB }));

router.get("/user", fetchSelfGithubUser);
router.get("/events", fetchSelfGithubUserEvents);
router.get("/followers", fetchSelfGithubUserFollowers);
router.get("/following", fetchSelfGithubUserFollowing);
router.get("/gists", fetchSelfGithubUserGists);
router.get("/repos", fetchSelfGithubUserRepos);
router.get("/starred", fetchSelfGithubUserStarred);

export default router;
