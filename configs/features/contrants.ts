export const isProduction = process.env.NODE_ENV === 'production';

export const FEATURE_FLAGS = {
    DISCORD: 'discord',
    GITHUB: 'github',
    HASHNODE: 'hashnode',
    LASTFM: 'lastfm',
    TWITTER: 'twitter',
    OSU: 'osu',
    SPOTIFY: 'spotify',
    MAILER: 'mailer',
    HTB: 'htb',
} as const;

export type FeatureFlags = (typeof FEATURE_FLAGS)[keyof typeof FEATURE_FLAGS];

export const featureToggleSettings: Record<FeatureFlags, string[]> = {
    [FEATURE_FLAGS.DISCORD]: [
        'DISCORD_BOT_TOKEN',
        'DISCORD_BOT_CLIENT_ID',
        'DISCORD_BOT_CLIENT_SECRET',
        'DISCORD_SERVER_ID',
        'DISCORD_WEBHOOK_URL',
        'DISCORD_SELF_ID',
    ],
    [FEATURE_FLAGS.GITHUB]: [
        'GH_TOKEN',
    ],
    [FEATURE_FLAGS.HASHNODE]: [
        'HASHNODE_API_KEY',
    ],
    [FEATURE_FLAGS.LASTFM]: [
        'LASTFM_API_KEY',
    ],
    [FEATURE_FLAGS.TWITTER]: [
        'TWITTER_BEARER_TOKEN',
    ],
    [FEATURE_FLAGS.OSU]: [
        'OSU_CLIENT_ID',
        'OSU_CLIENT_SECRET',
    ],
    [FEATURE_FLAGS.SPOTIFY]: [
        'SPOTIFY_CLIENT_ID',
        'SPOTIFY_CLIENT_SECRET',
    ],
    [FEATURE_FLAGS.MAILER]: [
        'MAIL_HOST',
        'MAIL_PORT',
        'MAIL_USER',
        'MAIL_PASS',
        'MAIL_LOGGER',
        'MAIL_FROM_EMAIL',
        'MAIL_FROM_NAME',
    ],
    [FEATURE_FLAGS.HTB]: [
        'HTB_TOKEN',
    ],
} as const;