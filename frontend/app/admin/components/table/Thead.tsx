import React, { FC, memo } from "react";
import TableHead from "./TableHead";

type Props = {
    trList: string[];
}

const Thead: FC<Props> = memo(({ trList }) => {
    return (
        <thead className="bg-gray-50 border-b">
            <tr>
                {trList.map((trInfo) => {
                    return (
                        <TableHead title={trInfo} key={trInfo} />
                    )
                })}
            </tr>
        </thead>
    )
})

Thead.displayName = 'Thead'

export default Thead