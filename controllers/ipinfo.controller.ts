import { Context } from "hono";

import { makeResponse } from "../libs";
import IPInfo from "../services/ipinfo.service";

const { getIPInfo } = new IPInfo();

export default class IPInfoController {
    // public async fetchCurrentIPInfo(
    //     ctx: Context
    // ): Promise<any> {
    //     try {
    //         const ip = ctx.header['x-forwarded-for']
    //         const data = await getIPInfo(ip as string)
    //         return ctx.json(data)
    //     } catch (error: any) {
    //         ctx.json({
    //             error: error.message,
    //             status: error.status
    //         }, 401)
    //     }
    // }

    public async fetchIPInfo(ctx: Context): Promise<any> {
        try {
            const ip = ctx.req.param("ip");
            const data = await getIPInfo(ip);
            return ctx.json(data);
        } catch {
            return ctx.json(
                makeResponse("Error fetching IPInfo", {}, "Failed", true),
                401,
            );
        }
    }
}
