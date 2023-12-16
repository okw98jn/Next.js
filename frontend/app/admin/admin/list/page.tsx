"use client"

import React, { FC, memo } from 'react'
import TableContainer from '../../components/table/TableContainer'
import Paginate from '../../components/Paginate'
import TableContents from './TableContents'
import { useAdmin } from '@/hooks/admin/useAdmin'
import Loading from '../../components/Loading'
import { usePagination } from '@/hooks/admin/usePagination'
import { AdminListType } from '../types/AdminType'
import SkeletonTable from './SkeletonTable'

const Page: FC = memo(() => {
    const { admin, isError } = useAdmin();
    const isLoading = !admin;
    const { currentPageData, page, pageCount, handleChange } = usePagination<AdminListType>(admin ?? []);

    if (isLoading) return (
        <>
            <Loading />
            <SkeletonTable isLoading={isLoading} />
        </>
    );
    if (isError) return <div>error</div>;

    return (
        <TableContainer>
            <TableContents data={currentPageData} isLoading={isLoading} />
            <Paginate count={pageCount} page={page} onChange={handleChange} />
        </TableContainer>
    )
})

Page.displayName = 'Page'
export default Page