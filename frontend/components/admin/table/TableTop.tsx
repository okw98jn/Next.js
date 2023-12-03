import React, { FC, memo } from 'react'

type Props = {
    title: string;
}

const TableTop: FC<Props> = memo(({ title }) => {
    return (
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
            <div>
                <p className="text-xl font-semibold text-gray-700">{title}</p>
            </div>
        </div>
    )
})

TableTop.displayName = 'TableTop'

export default TableTop