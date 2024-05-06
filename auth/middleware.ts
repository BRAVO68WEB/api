import { Context, Next } from "hono";
import { getAuth } from "@hono/oidc-auth"

export const middleware = async (ctx: Context, next: Next) => {
    try {
        const user = await getAuth(ctx);
        
        if (!user) {
            throw new Error("No user");
        }

        ctx.set("user", {
            userData: user,
        });

        await next();
    } catch {
        return ctx.json({
            message: "You're not authorized to access this resource",
        });
    }
};
