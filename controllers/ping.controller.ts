import { Context } from "hono";

import { makeResponse } from "../libs";
import PingService from "../services/ping.service";

export default class PingController extends PingService {
    public ping = async (ctx: Context) => {
        try {
            const { host } = ctx.req.query();
            const data = await this.pingHost(host);
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error occured while pinging", {}, "Failed", true));
        }
    };

    public pingParallel = async (ctx: Context) => {
        try {
            const { hosts } = ctx.req.query();
            const data = await this.pingHostsParallel(hosts.split(","));
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error occured while pinging", {}, "Failed", true));
        }
    };

    public pingAll = async (ctx: Context) => {
        try {
            const { hosts } = ctx.req.query();
            const data = await this.pingHosts(hosts.split(","));
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error occured while pinging", {}, "Failed", true));
        }
    };

    // public pingSelf = async (ctx: Context) => {
    //     try {
    //         const locIps = ['::1', '::ffff:', '127.0.0.1', 'localhost']
    //         if (locIps.includes(req.ip))
    //             return ctx.json(makeResponse('localhost', {}, 'Failed', true))
    //         const data = await this.pingHost(req.ip)
    //         return ctx.json(makeResponse(data))
    //     } catch (err) {
    //         return ctx.json(makeResponse(err.message, {}, 'Failed', true))
    //     }
    // }
}
