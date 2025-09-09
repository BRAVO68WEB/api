import { GatewayDispatchEvents } from "@discordjs/core";
import { isFeatureEnabled, FEATURE_FLAGS } from "../configs/features/flag";

import DiscordBotClient from "./discord_bot.factory";

export default async () => {
    const discordEnabled = await isFeatureEnabled(FEATURE_FLAGS.DISCORD);
    if (!discordEnabled) {
        console.log("⚠️ Discord Feature Flag is disabled.");
        return;
    }

    DiscordBotClient.init();

    const DiscordBot = DiscordBotClient._client;

    DiscordBot.on(GatewayDispatchEvents.PresenceUpdate, ({ data }) => {
        if (data.user.id == process.env.DISCORD_SELF_ID) {
            DiscordBotClient.setPresence(data);
        }
    });

    const selfInfo = await DiscordBot.api.users.getCurrent();
    DiscordBot.once(GatewayDispatchEvents.Ready, () => {
        console.log(
            "🔮 " + selfInfo.username + "#" + selfInfo.discriminator + " : Gateway Connected!",
        );
    });

    DiscordBotClient._gateway.connect();
};
