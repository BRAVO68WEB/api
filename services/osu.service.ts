import { auth,v2 } from "osu-api-extended";

const config = process.env;

export default class Osu {
    constructor() {
        auth.login_lazer(config.OSU_USERNAME, config.OSU_PASSWORD);
    }

    public async getOsuSelf() {
        return await v2.user.me.details("osu");
    }

    public async bestScoresSelf() {
        return await v2.user.scores.category(15_227_110, "best", {});
    }

    public async recentScoresSelf() {
        return await v2.user.scores.category(15_227_110, "recent", {});
    }

    public async favouriteBeatmapsSelf() {
        return await v2.user.beatmaps.most_played(15_227_110, {
            limit: 10,
        });
    }
}
