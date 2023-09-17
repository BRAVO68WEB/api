import { authClient } from "../helpers/auth_client";
import { code_verifier } from "./signin";

export const callbackOn = async (session_state: string, code: string) => {
    return authClient.callback(
        process.env.KEYCLOAK_REDIRECT_URI,
        { code_verifier, code, session_state, expires_in: "1d" },
        { code_verifier },
    );
};

export const callbackCLI = async (session_state: string, code: string) => {
    return authClient.callback(
        "http://localhost:8787/signin/callback",
        { code_verifier, code, session_state, expires_in: "1d" },
        { code_verifier },
    );
};

export const callbackApp = async (session_state: string, code: string) => {
    return authClient.callback(
        "b68-admin://callback",
        { code_verifier, code, session_state, expires_in: "1d" },
        { code_verifier },
    );
};
