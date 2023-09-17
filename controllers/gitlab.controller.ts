import GitLabService from "../services/gitlab.service";
import { makeResponse } from "../libs";
import { Context } from "hono";

export default class GitLabController extends GitLabService {
    public fetchSelfGitLabUser = async (ctx: Context) => {
        try {
            const user = await this.getGitLabUser();
            return ctx.json(makeResponse(user));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserRepos = async (ctx: Context) => {
        try {
            const username = 4419151;
            const repos = await this.getGitLabUserRepos(username);
            return ctx.json(makeResponse(repos));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserGists = async (ctx: Context) => {
        try {
            const gists = await this.getGitlabUserSnippets();
            return ctx.json(makeResponse(gists));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserFollowers = async (ctx: Context) => {
        try {
            const username = 4419151;
            const followers = await this.getGitLabUserFollowers(username);
            return ctx.json(makeResponse(followers));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserFollowing = async (ctx: Context) => {
        try {
            const username = 4419151;
            const following = await this.getGitLabUserFollowing(username);
            return ctx.json(makeResponse(following));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserStarred = async (ctx: Context) => {
        try {
            const username = 4419151;
            const starred = await this.getGitLabUserStarred(username);
            return ctx.json(makeResponse(starred));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGitLabUserEvents = async (ctx: Context) => {
        try {
            const events = await this.getGitLabUserEvents();
            return ctx.json(makeResponse(events));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };
}
