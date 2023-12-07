import React, { FC, memo } from 'react'

type TableCellProps = {
    text?: string | null;
}

const TableCell: FC<TableCellProps> = memo(({ text }) => {
    return (
        <td className="whitespace-nowrap">
            <div className="px-6 py-4">
                <div className="flex items-center gap-x-3">
                    <span className="block text-sm text-gray-500">{text}</span>
                </div>
            </div>
        </td>
    )
})

TableCell.displayName = 'TableCell'

export default TableCell