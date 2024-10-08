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