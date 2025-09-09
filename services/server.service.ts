import CacheClient from "../helpers/cache.factory";

export default class Server {
    public addNewServer = async (serverData: IServerInfo) => {
        return await CacheClient.addKVtoHash("servers", serverData.ip, JSON.stringify(serverData));
    };

    public getServer = async (ip: string) => {
        const data = await CacheClient.getKVfromHash("servers", ip);
        return JSON.parse(data as string) as IServerInfo | null;
    };

    public getAllServers = async () => {
        const data = await CacheClient.getAllFromHash("servers");
        console.log(data);
        if (!data) return [];
        return data ? Object.values(data).map((item) => JSON.parse(item) as IServerInfo) : [];
    };

    public deleteServer = async (ip: string) => {
        return await CacheClient.delKVfromHash("servers", ip);
    };
}