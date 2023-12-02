import { Context } from "hono";

import { makeResponse } from "../libs";
import ContactService from "../services/contactme.service";

export default class ContactController extends ContactService {
    public postQuery = async (ctx: Context) => {
        try {
            const body = await ctx.req.json();
            const data = this.postQueryToMail(body);
            return ctx.json(makeResponse("Mail was sent", data, "Success", false));
        } catch {
            return ctx.json(makeResponse("Error Sending Mail", {}, "Failed", true), 401);
        }
    };
}
