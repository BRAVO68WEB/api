import { gql } from 'graphql-request';
import { client } from '../helpers';

export default class DevnotesService {
    public getAllDevNotes = async () => {
        const query = gql`
            query {
                devnotes {
                    id
                    title
                    description
                    content
                    created_at
                    updated_at
                }
            }
        `;
        const devNotes: any = await client.request(query)
        return devNotes.devnotes
    }

    public getDevNote = async (id: string) => {
        const query = gql`
            query getDevNoteById($id: uuid!) {
                devnotes_by_pk(id: $id) {
                    id
                    title
                    description
                    content
                    created_at
                    updated_at
                }
            }
        `;

        const result : any = await client.request(query, {
            id
        })
        return result.devnotes_by_pk
    }

    public createDevNote = async (title: string, description: string, content: string) => {
        const mutation = gql`
            mutation createDevNote($title: String!, $description: String!, $content: String!){
                insert_devnotes_one(object: {title: $title, description: $description, content: $content}) {
                    id
                    title
                    description
                    content
                    created_at
                    updated_at
                }
            }
        `;

        const result : any = await client.request(mutation, {
            title,
            description,
            content
        })
        return result.insert_devnotes_one
    }

    public updateDevNote = async (id: string, updateData: any) => {
        const mutation = gql`
            mutation updateDevNoteById($id: uuid!, $updateData: devnotes_set_input!) {
                update_devnotes_by_pk(pk_columns: {id: $id}, _set: $updateData) {
                    id
                    title
                    description
                    content
                    created_at
                    updated_at
                }
            }
        `;

        const result : any = await client.request(mutation, {
            id,
            updateData
        })
        return result.update_devnotes_by_pk
    }

    public deleteDevNote = async (id: string) => {
        const mutation = gql`
            mutation deleteDevNoteById($id: uuid!){
                delete_devnotes_by_pk(id: $id) {
                    id
                    title
                    description
                    content
                    created_at
                    updated_at
                }
            }
        `;

        const result : any = await client.request(mutation, {
            id
        })
        return result.delete_devnotes_by_pk
    }
}