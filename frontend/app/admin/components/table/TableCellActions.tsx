import React, { FC, memo } from 'react'
import TableDropdownMenu from './TableDropdownMenu'

type TableCellActionsProps = {
    text: string;
    showContents: React.ReactNode;
    editForm: React.ReactNode;
    modalText: string;
}

const TableCellActions: FC<TableCellActionsProps> = memo(({ text, showContents, editForm, modalText }) => {
    return (
        <td className="whitespace-nowrap">
            <div className="px-1 py-2.5">
                <div className="flex items-center gap-x-3">
                    <span className="block text-sm text-gray-500">
                        <TableDropdownMenu text={text} showContents={showContents} editForm={editForm} modalText={modalText} />
                    </span>
                </div>
            </div>
        </td>
    )
})

TableCellActions.displayName = 'TableCellActions'

export default TableCellActions