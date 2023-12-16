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
import ShowContents from '../show/ShowContents'

type Props = {
    data: AdminListType[];
    isLoading?: boolean;
}

const TableContents: FC<Props> = memo(({ data, isLoading }) => {
    return (
        <>
            <TableTop title='管理者一覧' newPath='/admin/admin/new' />
            <Table>
                <Thead trList={AdminTheadInfo} />
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell text={row.id} isLoading={isLoading} />
                            <TableCell text={row.name} isLoading={isLoading} />
                            <TableCell text={row.login_id} isLoading={isLoading} />
                            <TableCell text={row.role} isLoading={isLoading} />
                            <TableCell text={row.status} isLoading={isLoading} />
                            <TableCell text={row.created_at} isLoading={isLoading} />
                            <TableCellActions text={row.name} editForm={<EditForm id={row.id} />} showContents={<ShowContents id={row.id} />} modalText={'管理者'} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
})

TableContents.displayName = 'TableContents'
export default TableContents