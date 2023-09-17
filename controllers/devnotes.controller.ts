import { Context } from "hono";

import { makeResponse } from "../libs";
import DevnotesService from "../services/devnotes.service";

export default class DevnotesController extends DevnotesService {
    public getAll = async (ctx: Context) => {
        try {
            const devNotes = await this.getAllDevNotes();
            return ctx.json(makeResponse(devNotes));
        }
        catch {
            return ctx.json(makeResponse("Error fetching DevNotes", {}, "Failed", true), 401);
        }
    };

    public get = async (ctx: Context) => {
        try {
            const { param } = ctx.req;
            const devNote = await this.getDevNote(param("id"));
            return ctx.json(makeResponse(devNote));
        }
        catch {
            return ctx.json(makeResponse("Error fetching DevNote", {}, "Failed", true), 401);
        }
    };

    public create = async (ctx: Context) => {
        try {
            const body = await ctx.req.json();
            const devNote = await this.createDevNote(body.title, body.description, body.content);
            return ctx.json(makeResponse(devNote));
        }
        catch {
            return ctx.json(makeResponse("Error creating DevNote", {}, "Failed", true), 401);
        }
    };

    public update = async (ctx: Context) => {
        try {
            const { param } = ctx.req;
            const body = await ctx.req.json();
            const devNote = await this.updateDevNote(param("id"), body);
            return ctx.json(makeResponse(devNote));
        }
        catch {
            return ctx.json(makeResponse("Error updating DevNote", {}, "Failed", true), 401);
        }
    };

    public delete = async (ctx: Context) => {
        try {
            const { param } = ctx.req;
            const devNote = await this.deleteDevNote(param("id"));
            return ctx.json(makeResponse(devNote));
        }
        catch {
            return ctx.json(makeResponse("Error deleting DevNote", {}, "Failed", true), 401);
        }
    };
}
