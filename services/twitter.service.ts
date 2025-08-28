import axiosInstance from "../helpers/axios_client";
import CacheClient from "../helpers/cache.factory";

export default class TwitterService {
    public getSelfUserProfile = async () => {
        const twitter_data = await CacheClient.get('twitter_self');
        if(twitter_data) {
            return twitter_data;
        }

        const { data } = await axiosInstance.get(
            "https://api.x.com/2/users/959990126687342595?user.fields=created_at&user.fields=name&user.fields=username&user.fields=public_metrics&user.fields=url&user.fields=location&user.fields=id&user.fields=description&user.fields=verified&user.fields=profile_banner_url&user.fields=profile_image_url",
            {
                headers: {
                    Authorization: "Bearer " + process.env.TWITTER_BEARER_TOKEN,
                },
            },
        );

        await CacheClient.set('twitter_self', data.data);

        return data.data;
    };

    public getSelfUserTweets = async () => {
        const { data } = await axiosInstance.get(
            "https://api.x.com/2/tweets/search/recent?query=from:bravo68web",
            {
                headers: {
                    Authorization: "Bearer " + process.env.TWITTER_BEARER_TOKEN,
                },
            },
        );
        return data.data;
    };
}
