import { Context } from "hono";

import { makeResponse } from "../libs";
import GitLabService from "../services/gitlab.service";

export default class GitLabController extends GitLabService {
    public fetchSelfGitLabUser = async (ctx: Context) => {
        try {
            const user = await this.getGitLabUser();
            return ctx.json(makeResponse(user));
        } catch {
            return ctx.json(makeResponse("Error fetching Gitlab Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserRepos = async (ctx: Context) => {
        try {
            const username = 4_419_151;
            const repos = await this.getGitLabUserRepos(username);
            return ctx.json(makeResponse(repos));
        } catch {
            return ctx.json(makeResponse("Error fetching Gitlab Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserGists = async (ctx: Context) => {
        try {
            const gists = await this.getGitlabUserSnippets();
            return ctx.json(makeResponse(gists));
        } catch {
            return ctx.json(makeResponse("Error fetching Gitlab Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserFollowers = async (ctx: Context) => {
        try {
            const username = 4_419_151;
            const followers = await this.getGitLabUserFollowers(username);
            return ctx.json(makeResponse(followers));
        } catch {
            return ctx.json(makeResponse("Error fetching Gitlab Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserFollowing = async (ctx: Context) => {
        try {
            const username = 4_419_151;
            const following = await this.getGitLabUserFollowing(username);
            return ctx.json(makeResponse(following));
        } catch {
            return ctx.json(makeResponse("Error fetching Gitlab Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserStarred = async (ctx: Context) => {
        try {
            const username = 4_419_151;
            const starred = await this.getGitLabUserStarred(username);
            return ctx.json(makeResponse(starred));
        } catch {
            return ctx.json(makeResponse("Error fetching Gitlab Stats", {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserEvents = async (ctx: Context) => {
        try {
            const events = await this.getGitLabUserEvents();
            return ctx.json(makeResponse(events));
        } catch {
            return ctx.json(makeResponse("Error fetching Gitlab Stats", {}, "Failed", true), 401);
        }
    };
}
