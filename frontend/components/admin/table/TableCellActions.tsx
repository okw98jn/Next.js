"use client"

import React, { FC, memo } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Trash2,
    FileEdit,
    Info,
} from "lucide-react"
import Link from "next/link"
import Icon from "@/components/atoms/Icon";
import { CgMenuGridO } from "react-icons/cg";
import { Button } from '@/components/ui/button'

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
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <Icon icon={<CgMenuGridO />} size='25px' color='#707680' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>{text}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Info className="mr-2 h-4 w-4" />
                                        <Link href={showPath} className="flex-1">
                                            <p className="text-xs">詳細</p>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <FileEdit className="mr-2 h-4 w-4" />
                                        <Link href={'/'} className="flex-1">
                                            <span className="text-xs">編集</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <Link href={'/'} className="flex-1">
                                        <span className="text-xs">削除</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </span>
                </div>
            </div>
        </td>
    )
})

TableCellActions.displayName = 'TableCellActions'

export default TableCellActions