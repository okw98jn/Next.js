import React, { FC, memo } from 'react'
import TableDropdownMenu from './TableDropdownMenu'

type TableCellActionsProps = {
    text: string;
    showPath: string;
}

const TableCellActions: FC<TableCellActionsProps> = memo(({ text, showPath }) => {
    return (
        <td className="whitespace-nowrap">
            <div className="px-1 py-3">
                <div className="flex items-center gap-x-3">
                    <span className="block text-sm text-gray-500">
                        <TableDropdownMenu text={text} showPath={showPath} />
                    </span>
                </div>
            </div>
        </td>
    )
})

TableCellActions.displayName = 'TableCellActions'

export default TableCellActions