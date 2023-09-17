import { Context, Next } from "hono";

import ServiceAccount from "../server/service";
import { APIKey } from "./apikey";

export const serviceAccount = new ServiceAccount();

export const keyware = async (ctx: Context, next: Next) => {
    const authClient = new APIKey();
    try {
        const authHeader = ctx.req.header("x-api-key") as string;
        if (!authHeader) {
            throw new Error("No x-api-key header found !!");
        }
        const decoded = await authClient.validateKeyS(authHeader);

        if (!decoded.isValid) {
            throw new Error("Invalid token");
        }

        const { service_creds } = await serviceAccount.serviceAccount();
        const user = await serviceAccount.fetchUser(service_creds, decoded.userSub);

        if (!user) {
            throw new Error("No user");
        }

        const { attributes } = user;
        if (attributes) {
            for (const key of Object.keys(attributes)) {
                user[key] = attributes[key][0];
            }
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
