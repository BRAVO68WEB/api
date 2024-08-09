import { decodeIdToken } from '@logto/js';
import { Context, Next } from 'hono';
import { getCookie, setCookie } from 'hono/cookie';
import { HTTPException } from 'hono/http-exception';

import { refreshTokens } from './auth.service';

const withAuth = ({
    requireAuth, requiredRoles 
}: { 
    requireAuth?: boolean, requiredRoles?: string[] 
} = {
    requireAuth: false,
    requiredRoles: []
}) => {
    return async (ctx: Context, next: Next) => {
        let id_token: string | undefined;
        if(getCookie(ctx, 'id_token')) {
            id_token = getCookie(ctx, 'id_token');
        }
        else {
            id_token = ctx.req.header('Authorization');
        }
        if (!id_token) {
            if (requireAuth) {
                throw new HTTPException(401, { message: 'Unauthorized' });
            } else {
                return;
            }
        }

        id_token = id_token.replace('Bearer ', '');

        const authUserData = decodeIdToken(id_token);

        if (!authUserData.exp || authUserData.exp < Date.now() / 1000) {
            try {
                const refresh_token = getCookie(ctx, 'refresh_token');
                if (!refresh_token) {
                    throw new HTTPException(401, { message: 'Unauthorized' });
                }
                const newTokens = await refreshTokens(refresh_token);
                setCookie(ctx, 'access_token', newTokens.accessToken);
                setCookie(ctx, 'refresh_token', newTokens.refreshToken ?? '');
                setCookie(ctx, 'id_token', newTokens.idToken ?? '');
                setCookie(ctx, 'expires_in', newTokens.expiresIn.toString());
            } catch (error) {
                throw new HTTPException(401, { message: 'Unauthorized' });
            }
        }

        const currentUserRoles = authUserData.roles

        if (!currentUserRoles) {
            throw new HTTPException(401, { message: 'Unauthorized' });
        }

        if (requiredRoles && requiredRoles.length > 0) {
            const hasRequiredRole = requiredRoles.some((requiredRole) => currentUserRoles.includes(requiredRole));
            if (!hasRequiredRole) {
                throw new HTTPException(403, { message: 'Forbidden' });
            }
        }

        ctx.set('user', authUserData);

        await next();
    }
}

export {
    withAuth
};