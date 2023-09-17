import { Context } from "hono";

import { makeResponse } from "../libs";
import HashnodeService from "../services/hashnode.service";

export default class HashnodeController extends HashnodeService {
    public getProfile = async (ctx: Context) => {
        try {
            const data = await this.getHashnodeProfile();
            return ctx.json(makeResponse(data));
        } catch {
            return ctx.json(makeResponse("Error fetching Hashnode Stats", {}, "Failed", true), 401);
        }
    };
}
