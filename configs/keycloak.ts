import { Issuer } from 'openid-client'

const keyCloakIssuer: Issuer = await Issuer.discover(
    process.env.KEYCLOAK_AUTH_SERVER_URL +
        '/realms/' +
        process.env.KEYCLOAK_REALM
)
console.log('🔐 Connected to Keycloak')

export default keyCloakIssuer