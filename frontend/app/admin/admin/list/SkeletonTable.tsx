"use client"

import React, { FC, memo } from 'react'
import TableContainer from '../../components/table/TableContainer'
import TableContents from './TableContents'
import { AdminListType } from '../types/AdminType'
import { usePagination } from '@/hooks/admin/usePagination'
import Paginate from '../../components/Paginate'

type Props = {
    isLoading: boolean;
};

const data: AdminListType[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: '',
    login_id: '',
    role: '',
    status: '',
    created_at: '',
}));

const SkeletonTable: FC<Props> = memo(({isLoading}) => {
    const { currentPageData, page, pageCount, handleChange } = usePagination<AdminListType>(data ?? []);
    return (
        <TableContainer>
            <TableContents data={currentPageData} isLoading={isLoading} />
            <Paginate count={pageCount} page={page} onChange={handleChange} />
        </TableContainer>
    )
})

SkeletonTable.displayName = 'SkeletonTable'
export default SkeletonTable