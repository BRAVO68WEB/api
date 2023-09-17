import { Context } from "hono";

import { authClient } from "../helpers/auth_client";

export const introspect = async (ctx: Context) => {
    try {
        let authHeader = ctx.req.header("authorization") as string;
        authHeader = authHeader.split(" ")[1];
        if (!authHeader) {
            throw new Error("No authorization header");
        }
        const token: string = authHeader;
        const decoded = await authClient.introspect(token);

        if (!decoded) {
            throw new Error("No user");
        }

        return decoded;
    } catch {
        return ctx.json({
            message: "Invalid Token",
        });
    }
};
