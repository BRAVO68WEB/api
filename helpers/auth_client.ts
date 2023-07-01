import KEYCLOAK_ISSUER from "../configs/keycloak"

const authConfig = {
    client_id: process.env.KEYCLOAK_CLIENT_ID,
    'auth-server-url':
        process.env.KEYCLOAK_AUTH_SERVER_URL +
        '/realms/' +
        process.env.KEYCLOAK_REALM,
    'ssl-required': 'all',
    resource: process.env.KEYCLOAK_CLIENT_ID,
    credentials: {
        'secret-jwt': { secret: process.env.KEYCLOAK_CLIENT_SECRET },
    },
    'confidential-port': 0,
    redirect_uri: process.env.KEYCLOAK_REDIRECT_URI,
    client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
    default_max_age: 3600000,
}

const authClient = new KEYCLOAK_ISSUER.Client(authConfig)

export { authClient }
