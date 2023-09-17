import DevnotesService from "../services/devnotes.service";
import { Context } from "hono";
import { makeResponse } from "../libs";

export default class DevnotesController extends DevnotesService {
    public getAll = async (ctx: Context) => {
        const devNotes = await this.getAllDevNotes();
        return ctx.json(makeResponse(devNotes));
    };

    public get = async (ctx: Context) => {
        const { param } = ctx.req;
        const devNote = await this.getDevNote(param("id"));
        return ctx.json(makeResponse(devNote));
    };

    public create = async (ctx: Context) => {
        const body = await ctx.req.json();
        const devNote = await this.createDevNote(body.title, body.description, body.content);
        return ctx.json(makeResponse(devNote));
    };

    public update = async (ctx: Context) => {
        const { param } = ctx.req;
        const body = await ctx.req.json();
        const devNote = await this.updateDevNote(param("id"), body);
        return ctx.json(makeResponse(devNote));
    };

    public delete = async (ctx: Context) => {
        const { param } = ctx.req;
        const devNote = await this.deleteDevNote(param("id"));
        return ctx.json(makeResponse(devNote));
    };
}
