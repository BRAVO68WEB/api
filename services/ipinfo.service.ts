import mmdb_client from "../helpers/mmdb_client";

export default class IPInfo {
    public getIPInfo = async (ip: string) => {
        return await mmdb_client.get(ip);
    };
}
