import { REST } from '@discordjs/rest'
import { WebSocketManager } from '@discordjs/ws'
import { GatewayIntentBits, Client } from '@discordjs/core'
export default class DiscordBotClient {
    public static _client: Client
    private static _rest: REST
    public static _gateway: WebSocketManager
    private static _currentPresence

    public static init() {
        this._rest = new REST({ version: '10' }).setToken(
            process.env.DISCORD_BOT_TOKEN
        )
        this._gateway = new WebSocketManager({
            token: process.env.DISCORD_BOT_TOKEN,
            intents: GatewayIntentBits.GuildPresences,
            rest: this._rest,
            shardCount: 1,
            shardIds: [0],
        })
        this._client = new Client({
            rest: this._rest,
            gateway: this._gateway,
        })
    }

    public static getPresence = async () => {
        return this._currentPresence
    }

    public static setPresence = async (presence: any) => {
        this._currentPresence = presence
    }

    public static getUser = async (id: string) => {
        return this._client.rest.get(`/users/${id}`)
    }
}
