import axiosInstance from "../helpers/axios_client";

export default class HashnodeService {
    public getHashnodeProfile = async () => {
        const query = `
        query {
            user(username: "bravo68web") {
              name
              username
              tagline
              dateJoined
              socialMediaLinks {
                twitter
                github
                stackoverflow
                linkedin
                website
              }
              followersCount
              followingsCount
              location
              profilePicture
              publications(first: 1) {
                edges {
                  node {
                    author {
                      id
                    }
                    domainInfo {
                      domain {
                        host
                        ready
                      }
                      hashnodeSubdomain
                    }
                    title
                    ogMetaData {
                      image
                    }
                    metaTags
                    descriptionSEO
                    links {
                      twitter
                      instagram
                      github
                      website
                      linkedin
                      hashnode
                    }
                  }
                }
              }
              badges {
                name
                description
              }
              isPro
            }
          }
        `;

        const { data } = await axiosInstance.post(
            "https://gql.hashnode.com",
            {
                query,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${process.env.HASHNODE_API_KEY}`,
                },
            },
        );
        return data.data.user;
    };
}
