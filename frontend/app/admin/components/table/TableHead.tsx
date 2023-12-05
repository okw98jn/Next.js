import React, { FC, memo } from 'react'

type TableHeadProps = {
    title?: string | null;
}

const TableHead: FC<TableHeadProps> = memo(({ title }) => {
    return (
        <th scope="col" className="px-6 py-3 text-left">
            <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">{title}</span>
            </div>
        </th>
    )
})

TableHead.displayName = 'TableHead'

export default TableHead