import KEYCLOAK_ISSUER from "../configs/keycloak";

const authClient = new KEYCLOAK_ISSUER.Client({
    client_id: process.env.KEYCLOAK_CLIENT_ID,
    // 'auth-server-url':
    //     process.env.KEYCLOAK_AUTH_SERVER_URL +
    //     '/realms/' +
    //     process.env.KEYCLOAK_REALM,
    // 'ssl-required': 'all',
    // resource: process.env.KEYCLOAK_CLIENT_ID,
    // credentials: {
    //     'secret-jwt': { secret: process.env.KEYCLOAK_CLIENT_SECRET },
    // },
    // 'confidential-port': 0,
    // redirect_uri: process.env.KEYCLOAK_REDIRECT_URI,
    client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
    // default_max_age: 3600000,
    realm: "master",
    "auth-server-url": "https://auth.b68.dev/",
    "ssl-required": "external",
    resource: "b68-api",
    "verify-token-audience": true,
    credentials: {
        secret: "vHUwpMA5Ccqea8JY7xLCDtatEump9yuD",
    },
    "confidential-port": 0,
    "policy-enforcer": {
        credentials: {},
    },
    token_endpoint_auth_method: "client_secret_jwt",
});

export { authClient };
