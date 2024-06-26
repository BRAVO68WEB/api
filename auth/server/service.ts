import axios from "axios";

export default class ServiceAccount {
    public serviceAccount = async () => {
        const rdata = {
            grant_type: "client_credentials",
        };

        const config = {
            method: "post",
            maxBodyLength: Number.POSITIVE_INFINITY,
            url: `${process.env.AUTH0_AUTH_SERVER_URL}/protocol/openid-connect/token`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${Buffer.from(
                    `${process.env.AUTH0_CLIENT_ID}:${process.env.AUTH0_CLIENT_SECRET}`,
                ).toString("base64")}`,
            },
            data: rdata,
        };

        const { data } = await axios(config);

        return {
            service_creds: data.access_token,
        };
    };

    public fetchUser = async (token: string, userSub: string) => {
        const config = {
            method: "get",
            maxBodyLength: Number.POSITIVE_INFINITY,
            url: `${process.env.AUTH0_AUTH_SERVER_URL}/admin/users/${userSub}`,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };

        const { data } = await axios(config);
        return data;
    };
}
