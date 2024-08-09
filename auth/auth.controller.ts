import type { Context } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { setCookie, getCookie } from 'hono/cookie'

import {
    getSignInUrl,
    handleSignIn,
    refreshTokens,
    getOidcConfig,
    requester,
    config,
} from './auth.service'

import {
    fetchUserInfo,
    // revoke,
    generateSignOutUri,
} from '@logto/js'

export const LoginUrl = async (ctx: Context) => {
    const { redirectUri ,codeVerifier, state, signInUri } = await getSignInUrl();
    setCookie(ctx, 'codeVerifier', codeVerifier);
    setCookie(ctx, 'state', state);
    setCookie(ctx, 'redirectUri', redirectUri);
    return ctx.redirect(signInUri);
}

export const Callback = async (ctx: Context) => {
    const codeVerifier = getCookie(ctx, 'codeVerifier');
    const state = getCookie(ctx, 'state');
    const redirectUri = getCookie(ctx, 'redirectUri');
    if (!codeVerifier || !state || !redirectUri) {
        throw new HTTPException(400, { message: 'Code verifier, state, or redirect uri not found' });
    }
    let callbackUri = ctx.req.url;
    // Check for protocol of redirect uri, match it with protocol of callback
    if (callbackUri.startsWith('http:') && redirectUri.startsWith('https:')) {
        callbackUri = callbackUri.replace('http:', 'https:');
    } else if (callbackUri.startsWith('https:') && redirectUri.startsWith('http:')) {
        callbackUri = callbackUri.replace('https:', 'http:');
    }

    const tokenResponse = await handleSignIn({ codeVerifier, state, redirectUri }, callbackUri);
    
    setCookie(ctx, 'access_token', tokenResponse.accessToken);
    setCookie(ctx, 'refresh_token', tokenResponse.refreshToken || '');
    setCookie(ctx, 'id_token', tokenResponse.idToken || '');
    setCookie(ctx, 'expires_in', tokenResponse.expiresIn.toString());

    return ctx.json(tokenResponse);
}

export const Refresh = async (ctx: Context) => {
    const { refresh_token} = await ctx.req.json();
    if (!refresh_token) {
        throw new HTTPException(400, { message: 'Refresh token not found' });
    }
    const tokenResponse = await refreshTokens(refresh_token);
    return ctx.json(tokenResponse);
}

export const UserInfo = async (ctx: Context) => {
    let access_token: string | undefined;
    if(getCookie(ctx, 'access_token')) {
        access_token = getCookie(ctx, 'access_token');
    }
    else {
        access_token = ctx.req.header('Authorization');
    }
    if (!access_token) {
        throw new HTTPException(400, { message: 'Access token not found' });
    }

    access_token = access_token.replace('Bearer ', '');
   
    const {
        userinfoEndpoint
    } = await getOidcConfig();
    const userInfo = await fetchUserInfo(
        userinfoEndpoint,
        access_token,
        requester
    );

    return ctx.json(userInfo);
}

export const Logout = async (ctx: Context) => {
    const access_token = getCookie(ctx, 'access_token');

    if (!access_token) {
        throw new HTTPException(400, { message: 'Access token not found' });
    }
    setCookie(ctx, 'access_token', '');
    setCookie(ctx, 'refresh_token', '');
    setCookie(ctx, 'id_token', '');
    setCookie(ctx, 'expires_in', '');

    const {
        endSessionEndpoint,
        // revocationEndpoint
    } = await getOidcConfig();

    // TODO: Implement revocation
    // await revoke(
    //     revocationEndpoint,
    //     config.appId,
    //     access_token,
    //     requester
    // )

    const signOutUri = generateSignOutUri({
        endSessionEndpoint,
        clientId: config.appId,
    });

    return ctx.redirect(signOutUri);
}