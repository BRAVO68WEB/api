import { Issuer, custom } from "openid-client";

custom.setHttpOptionsDefaults({
    timeout: 15000,
});

console.log("🔐 Connecting to Auth0");

const auth0Issuer: Issuer = await Issuer.discover(
    process.env.AUTH0_AUTH_SERVER_URL
);
console.log("🔐 Connected to Auth0");

export default auth0Issuer;
