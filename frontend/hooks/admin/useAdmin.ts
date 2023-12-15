import useSWR from 'swr'
import { AdminListType } from '@/app/admin/admin/types/AdminType';

const fetcher = (key: string) => fetch(key).then(res => res.json() as Promise<AdminListType[]>);

export const useAdmin = () => {
    const { data, error } = useSWR('/api/admin/admin', fetcher);

    return {
        admin: data,
        isError: error
    }
}