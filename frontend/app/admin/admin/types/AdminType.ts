export type AdminListType = {
    id: number;
    name: string;
    login_id: string;
    role: string;
    status: string;
    created_at: string;
}

export type AdminNewType = {
    name: string;
    login_id: string;
    role: string;
    status: string;
}