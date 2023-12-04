import React, { FC, memo } from 'react'
import TableContainer from '@/components/admin/table/TableContainer'
import TableCell from '@/components/admin/table/TableCell'
import Thead from '@/components/admin/table/Thead'
import TableTop from '@/components/admin/table/TableTop'
import TableBody from '@/components/admin/table/TableBody'
import Table from '@/components/admin/table/Table'
import TableRow from '@/components/admin/table/TableRow'
import TableCellActions from '@/components/admin/table/TableCellActions'
import { AdminTheadInfo } from '../../const/AdminConst'

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
            id: 1,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 1,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 1,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 1,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 1,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 1,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 1,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 1,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
        {
            id: 1,
            name: 'abc',
            login_id: 'abc',
            role: 'abc',
            status: 'abc',
            start: 'abc',
        },
    ]
    return (
        <TableContainer>
            <TableTop title='管理者一覧' />
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
                            <TableCellActions text={row.name} showPath='/' />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
})

page.displayName = 'page'
export default page