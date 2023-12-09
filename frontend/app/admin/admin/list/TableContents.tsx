import React, { FC, memo } from 'react'
import { AdminTheadInfo } from '../../const/AdminConst'
import TableTop from '../../components/table/TableTop'
import Thead from '../../components/table/Thead'
import TableBody from '../../components/table/TableBody'
import Table from '../../components/table/Table'
import TableRow from '../../components/table/TableRow'
import TableCell from '../../components/table/TableCell'
import TableCellActions from '../../components/table/TableCellActions'
import EditForm from '../edit/EditForm'
import { AdminListType } from '../types/AdminType'

type Props = {
    data: AdminListType[]
}

const TableContents: FC<Props> = memo(({ data }) => {
    return (
        <>
            <TableTop title='管理者一覧' newPath='/admin/admin/new' />
            <Table>
                <Thead trList={AdminTheadInfo} />
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell text={row.name} />
                            <TableCell text={row.name} />
                            <TableCell text={row.name} />
                            <TableCell text={row.name} />
                            <TableCell text={row.name} />
                            <TableCell text={row.name} />
                            <TableCellActions text={row.name} editForm={<EditForm id={row.id} />} showPath='/' modalText={'管理者'} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
})

TableContents.displayName = 'TableContents'
export default TableContents