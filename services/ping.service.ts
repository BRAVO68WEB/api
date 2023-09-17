import ping from "ping";

export default class PingService {
    public async pingHost(host: string) {
        try {
            return await ping.promise.probe(host);
        } catch (error) {
            return error;
        }
    }

    public async pingHosts(hosts: string[]) {
        try {
            return await Promise.all(hosts.map(host => ping.promise.probe(host)));
        } catch (error) {
            return error;
        }
    }

    public async pingHostsParallel(hosts: string[]) {
        try {
            return await Promise.all(
                hosts.map(host => ping.promise.probe(host, { parallel: true })),
            );
        } catch (error) {
            return error;
        }
    }
}
