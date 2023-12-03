import React, { FC, ReactNode, memo } from "react";

type Props = {
    children: ReactNode
}

const TableRow: FC<Props> = memo(({ children }) => {
    return (
        <tr className="hover:bg-gray-200 transition duration-300 ease-in-out even:bg-gray-50">
            {children}
        </tr>
    )
})

TableRow.displayName = 'TableRow'

export default TableRow