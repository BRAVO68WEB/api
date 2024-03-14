import { auth,v2 } from "osu-api-extended";

const config = process.env;

export default class Osu {
    constructor() {
        auth.login(Number(config.OSU_CLIENT_ID), config.OSU_CLIENT_SECRET, ['public']);
    }

    public async getOsuSelf() {
        // await auth.login(Number(config.OSU_CLIENT_ID), config.OSU_CLIENT_SECRET, ['public']);
        return await v2.user.details(15_227_110, "osu");
    }

    public async bestScoresSelf() {
        return await v2.scores.user.category(15_227_110, "best", {});
    }

    public async recentScoresSelf() {
        return await v2.scores.user.category(15_227_110, "recent", {});
    }

    public async favouriteBeatmapsSelf() {
        return await v2.user.beatmaps.most_played(15_227_110, {
            limit: 10,
        });
    }
}
