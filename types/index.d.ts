interface PaginationType {
    page: number;
    limit: number;
    sort_order?: "asc" | "desc";
    sort_by?: string;
    filters?: { [k: string]: unknown };
}

interface IContactFormInput {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface IServerInfo {
    ip: string;
    country: string;
    region: string;
    city: string;
    arch: string;
    usecases: string;
    provider: string;
}