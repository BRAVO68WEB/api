import { Issuer, custom } from "openid-client";

custom.setHttpOptionsDefaults({
    timeout: 15000,
});

console.log("🔐 Connecting to Keycloak");

const keyCloakIssuer: Issuer = await Issuer.discover(
    process.env.KEYCLOAK_AUTH_SERVER_URL + "/realms/" + process.env.KEYCLOAK_REALM,
);
console.log("🔐 Connected to Keycloak");

export default keyCloakIssuer;
