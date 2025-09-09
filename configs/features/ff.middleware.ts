import { Context, Next } from "hono";
import { HTTPException } from "hono/http-exception";
import { isFeatureEnabled } from "./flag";
import { FeatureFlags } from "./contrants";

const withFF = ({
    featureName 
}: { 
    featureName: FeatureFlags
}) => {
    return async (ctx: Context, next: Next) => {
        const isEnabled = await isFeatureEnabled(featureName);
        if (!isEnabled) {
            ctx.set("X-Feature-Flag", "disabled");
            ctx.set("X-Feature-Flag-Name", featureName);
            throw new HTTPException(503, { message: "Feature Unavailable" });
        }
        ctx.set("X-Feature-Flag", "enabled");
        ctx.set("X-Feature-Flag-Name", featureName);
        await next();
    };
};

export {
    withFF
};