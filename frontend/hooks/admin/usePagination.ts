import { useState, useCallback } from 'react';

export const usePagination = <T,>(data: T[]) => {
    // 1ページあたりのデータ数
    const PER_PAGE = 10;

    // 現在のページ数
    const [page, setPage] = useState(1);

    // ページ変更時のハンドラー
    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value); // ページ番号更新
    }, []);

    // 現在のページの最初のデータのインデックスを計算
    const offset = (page - 1) * PER_PAGE;

    // 現在のページのデータを取得
    const currentPageData = data.slice(offset, offset + PER_PAGE);

    // ページ数を計算
    const pageCount = Math.ceil((data.length) / PER_PAGE);

    return { currentPageData, page, pageCount, handleChange };
};