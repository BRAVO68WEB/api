import { z } from "zod";
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ProcessEnv extends z.infer<typeof ZodEnvironmentVariables> {}
    }
}

const ZodEnvironmentVariables = z.object({
    PORT: z.string(),
    NODE_ENV: z.string(),
    HASURA_GRAPHQL_ADMIN_SECRET: z.string(),
    HASURA_GRAPHQL_ENDPOINT: z.string(),
    SAFE_TOKEN: z.string(),
    GH_TOKEN: z.string(),
    HASHNODE_API_KEY: z.string(),
    LASTFM_API_KEY: z.string(),
    OSU_CLIENT_ID: z.string(),
    OSU_CLIENT_SECRET: z.string(),
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
    OIDC_CLIENT_ID: z.string(),
    OIDC_CLIENT_SECRET: z.string(),
    OIDC_REDIRECT_URI: z.string(),
    OIDC_ISSUER: z.string(),
    OIDC_AUTH_SECRET: z.string(),
    R2_CLIENT_ID: z.string(),
    R2_CLIENT_SECRET: z.string(),
    R2_BUCKET_NAME: z.string(),
    R2_BUCKET_REGION: z.string(),
    R2_BUCKET_ENDPOINT: z.string(),
    R2_BUCKET_URL: z.string(),
    R2_BUCKET_FOLDER: z.string(),
    DISCORD_BOT_TOKEN: z.string(),
    DISCORD_BOT_CLIENT_ID: z.string(),
    DISCORD_BOT_CLIENT_SECRET: z.string(),
    DISCORD_SERVER_ID: z.string(),
    DISCORD_WEBHOOK_URL: z.string(),
    DISCORD_SELF_ID: z.string(),
    GITLAB_PAT: z.string(),
    MAIL_HOST: z.string(),
    MAIL_PORT: z.string(),
    MAIL_USER: z.string(),
    MAIL_PASS: z.string(),
    MAIL_LOGGER: z.string(),
    MAIL_FROM_EMAIL: z.string(),
    MAIL_FROM_NAME: z.string(),
    HTB_TOKEN: z.string()
});

ZodEnvironmentVariables.parse(process.env);

console.log("✅ Environment variables verified!");
