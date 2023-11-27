import KEYCLOAK_ISSUER from "../configs/keycloak";

const authClient = new KEYCLOAK_ISSUER.Client({
    client_id: process.env.KEYCLOAK_CLIENT_ID,
    client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
    // default_max_age: 3_600_000,
    realm: process.env.KEYCLOAK_REALM,
    "auth-server-url": process.env.KEYCLOAK_AUTH_SERVER_URL,
    "ssl-required": "external",
    resource: process.env.KEYCLOAK_CLIENT_ID,
    "verify-token-audience": true,
    credentials: {
        secret: process.env.KEYCLOAK_CLIENT_SECRET,
    },
    timeout: 5000,
    "confidential-port": 0,
    "policy-enforcer": {
        credentials: {},
    },
    token_endpoint_auth_method: "client_secret_jwt",
});

export { authClient };
