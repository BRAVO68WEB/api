import { Hono } from "hono";
import GithubController from "../../controllers/github.controller";

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

router.get("/user", fetchSelfGithubUser);
router.get("/events", fetchSelfGithubUserEvents);
router.get("/followers", fetchSelfGithubUserFollowers);
router.get("/following", fetchSelfGithubUserFollowing);
router.get("/gists", fetchSelfGithubUserGists);
router.get("/repos", fetchSelfGithubUserRepos);
router.get("/starred", fetchSelfGithubUserStarred);

export default router;
