import { Context, Next } from "hono";

import { authClient } from "../helpers/auth_client";

export const middleware = async (ctx: Context, next: Next) => {
    try {
        let authHeader: string = ctx.req.header("authorization") as string;
        authHeader = authHeader.split(" ")[1];

        if (!authHeader) {
            throw new Error("No authorization header");
        }
        const token: string = authHeader;
        const decoded = await authClient.introspect(token);
        const user = await authClient.userinfo(token, {
            method: "GET",
            tokenType: "Bearer",
            params: {
                access_token: token,
            },
            via: "header",
        });

        if (!user) {
            throw new Error("No user");
        }

        ctx.set("user", {
            userData: user,
            tokenData: decoded,
        });

        await next();
    } catch {
        return ctx.json({
            message: "You're not authorized to access this resource",
        });
    }
};
