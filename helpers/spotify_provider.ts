import axios from "axios";

const data = {
    grant_type: "refresh_token",
    refresh_token: `${process.env.SPOTIFY_REFRESH_TOKEN}`,
};

const config = {
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
        Authorization:
            "Basic " +
            Buffer.from(
                `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
            ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
};

let accessToken = "";

const getAccessToken = async () => {
    axios(config)
        .then((result) => {
            accessToken = result.data.access_token;
            console.log("Initail Generation !!");
        })
        .catch((error) => {
            console.log(error);
        });
    setInterval(() => {
        axios(config)
            .then((result) => {
                accessToken = result.data.access_token;
            })
            .catch((error) => {
                console.log(error);
            });
        console.log("Token regenerated");
    }, 3_600_000);
};
if (process.env.NODE_ENV === "production") {
    getAccessToken();
} else {
    // file deepcode ignore HardcodedNonCryptoSecret: "Testing HardcodedNonCryptoSecret for development"
    accessToken = "ascawqw3efwsedve45gedrfwe34rwefrwsedgvbxxxxxxxxxxxxxxxxxxxxxxxx";
    console.log("🤞", "Spotify Token not generated");
}

export default () => {
    return accessToken;
};
