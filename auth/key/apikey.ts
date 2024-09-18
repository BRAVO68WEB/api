import crypto from "node:crypto";

import { gql } from "graphql-request";

import { Mutation_Root, Query_Root } from "../../graphql/types";
import { client } from "../../helpers";

export class APIKey {
    public generateKey(): string {
        return crypto.randomBytes(32).toString("hex");
    }

    public async fetchKeyS(userSub: string): Promise<unknown> {
        const initQuery = gql`
          query findUser($userSub: uuid!) {
              apikey_by_pk(user_id: $userSub) {
                  api_key
                  user_id
                  created_at
                  updated_at
              }
          }
        `;
        const data: Query_Root  = await client.request(initQuery, { userSub });
        return data.apikey_by_pk;
    }

    public async createKeyS(userSub: string): Promise<unknown> {
        const serchKey = await this.fetchKeyS(userSub);
        const key = this.generateKey();
        if (serchKey) {
            const updateQuery = gql`
              mutation updateApiKey($userSub: uuid!, $key: String!) {
                  update_apikey_by_pk(
                      pk_columns: { user_id: $userSub }
                      _set: { api_key: $key }
                  ) {
                      api_key
                      user_id
                      created_at
                      updated_at
                  }
              }
            `;
            const data: Mutation_Root = await client.request(updateQuery, {
                userSub,
                key,
            });
            return data.update_apikey_by_pk;
        }
        const createQuery = gql`
          mutation insertApiKey($userSub: uuid!, $key: String!) {
              insert_apikey_one(object: { user_id: $userSub, api_key: $key }) {
                  api_key
                  user_id
                  created_at
                  updated_at
              }
          }
        `;
        const data: Mutation_Root = await client.request(createQuery, { userSub, key });
        return data.insert_apikey_one;
    }

    public async deleteKeyS(userSub: string): Promise<unknown> {
        const deleteQuery = gql`
          mutation deleteApiKey($userSub: uuid!) {
              delete_apikey_by_pk(user_id: $userSub) {
                  user_id
                  created_at
                  updated_at
              }
          }
        `;
        const data: Mutation_Root = await client.request(deleteQuery, { userSub });
        return data.delete_apikey_by_pk;
    }

    public async validateKeyS(key: string): Promise<unknown> {
        const validateQuery = gql`
          query validateKey($key: String!) {
              apikey(where: { api_key: { _eq: $key } }) {
                  created_at
                  updated_at
                  user_id
              }
          }
        `;

        const data: Query_Root = await client.request(validateQuery, { key });

        return data.apikey.length === 0 ? {
                isValid: false,
            } : {
                isValid: true,
                userSub: data.apikey[0].user_id,
            };
    }
}
