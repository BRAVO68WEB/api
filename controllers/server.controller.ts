import { Context } from "hono";

import { makeResponse } from "../libs";
import ServerService from "../services/server.service";

export default class ServerController extends ServerService {
    public add = async (ctx: Context) => {
        try {
            const body = await ctx.req.json();
            const data = await this.addNewServer(body);
            return ctx.json(makeResponse(data, {}, "Server was added", false));
        } catch {
            return ctx.json(makeResponse({}, {}, "Error Adding Server", true), 401);
        }
    };

    public get = async (ctx: Context) => {
        try {
            const ip = ctx.req.param("ip");
            const data = await this.getServer(ip);
            return ctx.json(makeResponse(data, {}, "Server was retrieved", false));
        } catch {
            return ctx.json(makeResponse({}, {}, "Error Retrieving Server", true), 401);
        }
    };

    public getAll = async (ctx: Context) => {
        try {
            const data = await this.getAllServers();
            return ctx.json(makeResponse(data, {}, "Servers were retrieved", false));
        } catch {
            return ctx.json(makeResponse({}, {}, "Error Retrieving Servers", true), 401);
        }
    };

    public delete = async (ctx: Context) => {
        try {
            const ip = ctx.req.param("ip");
            const data = await this.deleteServer(ip);
            return ctx.json(makeResponse(data, {}, "Server was deleted", false));
        } catch {
            return ctx.json(makeResponse({}, {}, "Error Deleting Server", true), 401);
        }
    }
}
