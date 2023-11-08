import axios from "../helpers/axios_client";

export default class HackTheBoxService {
    public profile = async (id: number) => {
        const { data } = await axios.get(`https://www.hackthebox.com/api/v4/user/profile/basic/${id}`, {
            headers: {
                "Authorization": `Bearer ${process.env.HTB_TOKEN}`,
                "Accept": 'application/json, text/plain, */*'
            },
        });
        return data.profile;
    }

    public activity =  async (id: number) => {
        const { data } = await axios.get(`https://www.hackthebox.com/api/v4/user/profile/activity/${id}`, {
            headers: {
                "Authorization": `Bearer ${process.env.HTB_TOKEN}`,
                "Accept": 'application/json, text/plain, */*'
            },
        });
        return data.profile.activity;
    }

    public mechines =  async (id: number) => {
        const { data } = await axios.get(`https://www.hackthebox.com/api/v4/user/profile/progress/machines/os/${id}`, {
            headers: {
                "Authorization": `Bearer ${process.env.HTB_TOKEN}`,
                "Accept": 'application/json, text/plain, */*'
            },
        });
        return data.profile.operating_systems;
    }

    public challenges =  async (id: number) => {
        const { data } = await axios.get(`https://www.hackthebox.com/api/v4/user/profile/progress/challenges/${id}`, {
            headers: {
                "Authorization": `Bearer ${process.env.HTB_TOKEN}`,
                "Accept": 'application/json, text/plain, */*'
            },
        });
        return data.profile;
    }
}
