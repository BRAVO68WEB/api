import AUTH0_ISSUER from "../configs/auth0";

const authClient = new AUTH0_ISSUER.Client({
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    default_max_age: 36_000,
    redirect_uris: [
        process.env.AUTH0_REDIRECT_URI
    ],
    response_types: ['code'],
    token_endpoint_auth_method: 'client_secret_basic',
    token_endpoint_auth_signing_alg: 'RS256'
});

export { authClient };
