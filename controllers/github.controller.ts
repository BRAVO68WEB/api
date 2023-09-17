import GithubService from "../services/github.service";
import { Context } from "hono";
import { makeResponse } from "../libs";

export default class GithubController extends GithubService {
    public fetchSelfGithubUser = async (ctx: Context) => {
        try {
            const user = await this.getGithubUser();
            return ctx.json(makeResponse(user));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserRepos = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const repos = await this.getGithubUserRepos(username);
            return ctx.json(makeResponse(repos));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserGists = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const gists = await this.getGithubUserGists(username);
            return ctx.json(makeResponse(gists));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserFollowers = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const followers = await this.getGithubUserFollowers(username);
            return ctx.json(makeResponse(followers));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserFollowing = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const following = await this.getGithubUserFollowing(username);
            return ctx.json(makeResponse(following));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserStarred = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const starred = await this.getGithubUserStarred(username);
            return ctx.json(makeResponse(starred));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };

    public fetchSelfGithubUserEvents = async (ctx: Context) => {
        try {
            const username = "bravo68web";
            const events = await this.getGithubUserEvents(username);
            return ctx.json(makeResponse(events));
        } catch (error: any) {
            return ctx.json(makeResponse(error.message, {}, "Failed", true), 401);
        }
    };
}
