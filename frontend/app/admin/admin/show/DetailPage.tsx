"use client";
import { FC, memo } from 'react'
import DataItem from '../../components/showPage/DataItem';

const DetailPage: FC = memo(() => (
    <div className="space-y-3">
        <DataItem label="名前" text="山田太郎" />
        <DataItem label="ログインID" text="123456789" />
        <DataItem label="権限" text="管理者" />
        <DataItem label="ステータス" text="有効" />
    </div>
));

DetailPage.displayName = 'DetailPage'

export default DetailPage