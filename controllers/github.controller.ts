import { Context } from "hono";

import { makeResponse } from "../libs";
import GithubService from "../services/github.service";

export default class GithubController extends GithubService {
    public fetchSelfGithubUser = async (ctx: Context) => {
        try {
            const user = await this.getGithubUser();
            return ctx.json(makeResponse(user));
        } catch {
            return ctx.json(makeResponse("Error fetching Github Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserRepos = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const repos = await this.getGithubUserRepos(username);
            return ctx.json(makeResponse(repos));
        } catch {
            return ctx.json(makeResponse("Error fetching Github Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserGists = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const gists = await this.getGithubUserGists(username);
            return ctx.json(makeResponse(gists));
        } catch {
            return ctx.json(makeResponse("Error fetching Github Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserFollowers = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const followers = await this.getGithubUserFollowers(username);
            return ctx.json(makeResponse(followers));
        } catch {
            return ctx.json(makeResponse("Error fetching Github Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserFollowing = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const following = await this.getGithubUserFollowing(username);
            return ctx.json(makeResponse(following));
        } catch {
            return ctx.json(makeResponse("Error fetching Github Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserStarred = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const starred = await this.getGithubUserStarred(username);
            return ctx.json(makeResponse(starred));
        } catch {
            return ctx.json(makeResponse("Error fetching Github Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserEvents = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const events = await this.getGithubUserEvents(username);
            return ctx.json(makeResponse(events));
        } catch {
            return ctx.json(makeResponse("Error fetching Github Stats", {}, "Failed", true), 401);
        }
    };
}
