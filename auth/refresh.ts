import { authClient } from "../helpers/auth_client";
import { Context } from "hono";

export const refresh = async (ctx: Context) => {
    try {
        const body = await ctx.req.json();
        const refreshToken = body.refresh_token as string;
        if (!refreshToken) {
            throw new Error("No refresh token provided !!");
        }
        const tokenData = await authClient.refresh(refreshToken);

        if (!tokenData) {
            throw new Error("No user");
        }

        return tokenData;
    } catch (err) {
        return ctx.json({
            message: "Invalid Refresh Token",
        });
    }
};
