import { Client,GatewayIntentBits } from "@discordjs/core";
import { REST } from "@discordjs/rest";
import { WebSocketManager } from "@discordjs/ws";

export default class DiscordBotClient {
    public static _client: Client;
    public static _rest: REST;
    public static _gateway: WebSocketManager;
    public static _currentPresence;

    public static init() {
        this._rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN);
        this._gateway = new WebSocketManager({
            token: process.env.DISCORD_BOT_TOKEN,
            intents: GatewayIntentBits.GuildPresences,
            rest: this._rest as any,
            shardCount: 1,
            shardIds: [0],
        });
        this._client = new Client({
            rest: this._rest as any,
            gateway: this._gateway,
        });
    }

    public static getPresence = async () => {
        return this._currentPresence;
    };

    public static setPresence = async (presence: unknown) => {
        this._currentPresence = presence;
    };

    public static getUser = async (id: string) => {
        return this._client.rest.get(`/users/${id}`);
    };
}
