import { Skeleton } from '@/components/ui/skeleton';
import React, { FC, memo } from 'react'

type TableCellProps = {
    text?: string | number | null;
    isLoading?: boolean;
}

const TableCell: FC<TableCellProps> = memo(({ text, isLoading }) => {
    return (
        <td className="whitespace-nowrap">
            {isLoading ? (
                <div className="flex justify-center">
                    <Skeleton className="h-6 w-4/5" />
                </div>
            ) : (
                <div className="px-6 py-2.5">
                    <div className="flex items-center gap-x-3">
                        <span className="block text-sm text-gray-500">{text}</span>
                    </div>
                </div>
            )}
        </td>
    )
})

TableCell.displayName = 'TableCell'

export default TableCell