import fetch from 'node-fetch'

import {  
    withReservedScopes,
    fetchOidcConfig,
    discoveryPath,
    generateSignInUri,
    verifyAndParseCodeFromCallbackUri,
    fetchTokenByAuthorizationCode,
    fetchTokenByRefreshToken,
} from '@logto/js'

import { createRequester } from '@logto/client'
import { randomFillSync, createHash } from 'node:crypto'
import { fromUint8Array } from 'js-base64';

export const config = {
    endpoint: process.env.OIDC_ISSUER.split('/oidc')[0],
    appId: process.env.OIDC_CLIENT_ID,
    appSecret: process.env.OIDC_CLIENT_SECRET,
    redirectUri: process.env.OIDC_REDIRECT_URI,
    scopes: withReservedScopes(
        [
            'openid',
            'profile',
            'email',
            'custom_data',
            'roles',
            'b68:upload'
        ]
    ).split(' '),
    postLogoutRedirectUri: 'https://api.b68.dev',
};

export const requester = createRequester(async (...args: Parameters<typeof fetch>) => {
    const [input, init] = args;

    return fetch(input, {
      ...init,
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${config.appId}:${config.appSecret}`,
          'utf8'
        ).toString('base64')}`,
        ...init?.headers,
      },
    });
});

export const generateRandomString = (length = 64) => {
    return fromUint8Array(randomFillSync(new Uint8Array(length)), true);
};

export const generateCodeChallenge = async (codeVerifier) => {
    const encodedCodeVerifier = new TextEncoder().encode(codeVerifier);
    const hash = createHash('sha256');
    hash.update(encodedCodeVerifier);
    const codeChallenge = hash.digest();
    return fromUint8Array(codeChallenge, true);
};

export const getOidcConfig = async () => {
    return fetchOidcConfig(new URL(discoveryPath, config.endpoint).toString(), requester);
};

export const getSignInUrl = async () => {
    const { authorizationEndpoint } = await getOidcConfig();
    const codeVerifier = generateRandomString();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    const state = generateRandomString();

    const { redirectUri, scopes, appId: clientId } = config;

    const signInUri = generateSignInUri({
        authorizationEndpoint,
        clientId,
        redirectUri: redirectUri,
        codeChallenge,
        state,
        scopes,
        resources: [
            'https://api.b68.dev',
        ],
    });

    return { redirectUri, codeVerifier, state, signInUri };
};

export const handleSignIn = async (signInSession: {
    codeVerifier: string;
    state: string;
    redirectUri: string;
}, callbackUri) => {
    const { redirectUri, state, codeVerifier } = signInSession;
    const code = verifyAndParseCodeFromCallbackUri(callbackUri, redirectUri, state);

    const { appId: clientId } = config;
    const { tokenEndpoint } = await getOidcConfig();
    const codeTokenResponse = await fetchTokenByAuthorizationCode(
        {
            clientId,
            tokenEndpoint,
            redirectUri,
            codeVerifier,
            code,
        },
        requester
    );

    return codeTokenResponse;
};

export const refreshTokens = async (refreshToken) => {
    const { appId: clientId, scopes } = config;
    const { tokenEndpoint } = await getOidcConfig();
    const tokenResponse = await fetchTokenByRefreshToken(
        {
            clientId,
            tokenEndpoint,
            refreshToken,
            scopes,
        },
        requester
    );

    return tokenResponse;
};