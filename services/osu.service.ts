import axiosInstance from "../helpers/axios_client"

const config = process.env;

export type auth_scopes = ('chat.write' | 'delegate' | 'forum.write' | 'friends.read' | 'identify' | 'public')[];

interface Login {
    access_token: string,
    expires_in: number
}

export default class Osu {
    private session;
    private url = 'https://osu.ppy.sh/api/v2/';

    constructor() {
        this.osuLogin(Number(config.OSU_CLIENT_ID), config.OSU_CLIENT_SECRET, ['public']);
    }

    public osuLogin = async (clientId: number, clientSecret: string, scope: auth_scopes): Promise<Login> => {
        if (!Array.isArray(scope) || !scope) throw new Error('Scope must be an Array');
      
        const { 
            data: {
                access_token, expires_in
            } 
        } = await axiosInstance('https://osu.ppy.sh/oauth/token', {
          method: 'POST',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'x-api-version': '20240130',
          },
          data: JSON.stringify({
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
            scope: scope.join(' '),
            code: 'code',
          })
        });
      
        this.session = { access_token, expires_in: Date.now() + expires_in * 1000}
        return { access_token, expires_in };
    };

    public async checkIfTokenRenewalNeeded() {
        if (this.session.expires_in <= Date.now() + 20 * 60 * 1000) {
            this.osuLogin(Number(config.OSU_CLIENT_ID), config.OSU_CLIENT_SECRET, ['public']);
        }
    }

    public async getOsuSelf() {
        await this.checkIfTokenRenewalNeeded();
        const token = this.session;
        
        const { data } = await axiosInstance.get(`${this.url}users/15227110`, {
            headers: {
                Authorization: `Bearer ${token.access_token}`
            }
        });

        return data;
    }

    public async bestScoresSelf() {
        await this.checkIfTokenRenewalNeeded();
        const token = this.session;

        const { data } = await axiosInstance.get(`${this.url}users/15227110/scores/best`, {
            headers: {
                Authorization: `Bearer ${token.access_token}`
            }
        });

        return data;        
    }

    public async recentScoresSelf() {
        await this.checkIfTokenRenewalNeeded();
        const token = this.session;

        const { data } = await axiosInstance.get(`${this.url}users/15227110/scores/recent`, {
            headers: {
                Authorization: `Bearer ${token.access_token}`
            }
        });

        return data;
    }

    public async favouriteBeatmapsSelf() {
        await this.checkIfTokenRenewalNeeded();
        const token = this.session;

        const { data } = await axiosInstance.get(`${this.url}users/15227110/beatmapsets/favourite`, {
            headers: {
                Authorization: `Bearer ${token.access_token}`
            }
        });

        return data;
    }
}
