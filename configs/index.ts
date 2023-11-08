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
    OSU_API_KEY: z.string(),
    OSU_USERNAME: z.string(),
    OSU_PASSWORD: z.string(),
    YT_API_KEY: z.string(),
    TWITTER_API_KEY: z.string(),
    TWITTER_API_SECRET: z.string(),
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
    S3_CLIENT_ID: z.string(),
    S3_CLIENT_SECRET: z.string(),
    S3_BUCKET_NAME: z.string(),
    S3_BUCKET_REGION: z.string(),
    S3_BUCKET_ENDPOINT: z.string(),
    S3_BUCKET_URL: z.string(),
    S3_BUCKET_FOLDER: z.string(),
    MAL_CLIENT_ID: z.string(),
    MAL_CLIENT_SECRET: z.string(),
    AWS_ACCESS_KEY_ID: z.string(),
    AWS_SECRET_ACCESS_KEY: z.string(),
    AWS_REGION: z.string(),
    KEYCLOAK_CLIENT_ID: z.string(),
    KEYCLOAK_CLIENT_SECRET: z.string(),
    KEYCLOAK_REDIRECT_URI: z.string(),
    KEYCLOAK_AUTH_SERVER_URL: z.string(),
    KEYCLOAK_REALM: z.string(),
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
