import HashnodeService from "../services/hashnode.service";
import { Context } from "hono";
import { makeResponse } from "../libs";

export default class HashnodeController extends HashnodeService {
    public getProfile = async (ctx: Context) => {
        try {
            const data = await this.getHashnodeProfile();
            return ctx.json(makeResponse(data));
        } catch (err: any) {
            return ctx.json(makeResponse(err.message, {}, "Failed", true), 401);
        }
    };
}
