import React, { FC, memo } from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
    title: string;
    newPath: string;
}

const TableTop: FC<Props> = memo(({ title, newPath }) => {
    return (
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
            <div>
                <p className="text-xl font-semibold text-gray-700">{title}</p>
            </div>
            <div>
                <Link href={newPath}>
                    <Button className='w-20 h-9'>登録</Button>
                </Link>
            </div>
        </div>
    )
})

TableTop.displayName = 'TableTop'

export default TableTop