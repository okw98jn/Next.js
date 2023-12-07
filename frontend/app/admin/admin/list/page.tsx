import React, { FC, memo } from 'react'
import { AdminTheadInfo } from '../../const/AdminConst'
import TableContainer from '../../components/table/TableContainer'
import TableTop from '../../components/table/TableTop'
import Thead from '../../components/table/Thead'
import TableBody from '../../components/table/TableBody'
import Table from '../../components/table/Table'
import TableRow from '../../components/table/TableRow'
import TableCell from '../../components/table/TableCell'
import TableCellActions from '../../components/table/TableCellActions'
import EditForm from '../edit/EditForm'

const page: FC = memo(() => {
    const data = [
        {
            id: 1,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 2,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 3,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 4,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 5,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 6,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 7,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 8,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 9,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 10,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
    ]
    return (
        <TableContainer>
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
        </TableContainer>
    )
})

page.displayName = 'page'
export default page