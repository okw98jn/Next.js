"use client"

import React, { FC, memo, useCallback, useState } from 'react'
import TableContainer from '../../components/table/TableContainer'
import Paginate from '../../components/Paginate'
import TableContents from './TableContents'
import { useAdmin } from '@/hooks/admin/useAdmin'

const Page: FC = memo(() => {
    const { admin, isError } = useAdmin();
    
    // 1ページあたりのデータ数を定義
    const PER_PAGE = 10;

    // 現在のページ数をstateとして管理
    const [page, setPage] = useState(1);

    // ページ変更時のハンドラー
    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value); // ページ番号更新
    }, []);

    if (!admin) return <div>Loading...</div>;
    if (isError) return <div>error</div>;

    // 現在のページの最初のデータのインデックスを計算
    const offset = (page - 1) * PER_PAGE;

    // 現在のページのデータを取得
    const currentPageData = admin.slice(offset, offset + PER_PAGE);

    // ページ数を計算
    const pageCount = Math.ceil((admin.length) / PER_PAGE);
    return (
        <TableContainer>
            <TableContents data={currentPageData} />
            <Paginate count={pageCount} page={page} onChange={handleChange} />
        </TableContainer>
    )
})

Page.displayName = 'Page'
export default Page