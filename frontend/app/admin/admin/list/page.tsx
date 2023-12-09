"use client"

import React, { FC, memo, useCallback, useState } from 'react'
import TableContainer from '../../components/table/TableContainer'
import Paginate from '../../components/Paginate'
import TableContents from './TableContents'

const Page: FC = memo(() => {
    // 1ページあたりのデータ数を定義
    const PER_PAGE = 10;

    // 現在のページ数をstateとして管理
    const [page, setPage] = useState(1);

    const data = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: 'abc' + i,
        login_id: 'abc',
        role: 'abc',
        status: 'abc',
        start: 'abc',
    }));

    // ページ変更時のハンドラー
    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value); // ページ番号更新
    }, []);

    // 現在のページの最初のデータのインデックスを計算
    const offset = (page - 1) * PER_PAGE;

    // 現在のページのデータを取得
    const currentPageData = data.slice(offset, offset + PER_PAGE);

    // ページ数を計算
    const pageCount = Math.ceil(data.length / PER_PAGE);

    return (
        <TableContainer>
            <TableContents data={currentPageData} />
            <Paginate count={pageCount} page={page} onChange={handleChange} />
        </TableContainer>
    )
})

Page.displayName = 'Page'
export default Page