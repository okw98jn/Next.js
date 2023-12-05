"use client"

import React, { FC, memo, useState } from 'react'
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
import AlertModal from '@/components/modal/AlertModal'
import EditModal from '@/components/modal/EditModal'

type TableDropdownMenuProps = {
    text: string;
    showPath: string;
    editForm: React.ReactNode;
    modalText: string;
}

const TableDropdownMenu: FC<TableDropdownMenuProps> = memo(({ text, showPath, editForm, modalText }) => {
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [alertModalOpen, setAlertModalOpen] = useState(false);

    const handleEditClick = () => {
        // 編集がクリックされたときに、EditModalを開く処理
        setEditModalOpen(true);
    };
    const handleDeleteClick = () => {
        // 削除がクリックされたときに、AlertModalを開く処理
        setAlertModalOpen(true);
    };

    return (
        <>
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
                            <span className="text-xs cursor-pointer flex-1" onClick={handleEditClick}>編集</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span className="text-xs cursor-pointer flex-1" onClick={handleDeleteClick}>削除</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <EditModal editModalOpen={editModalOpen} setEditModalOpen={setEditModalOpen} modalText={modalText} editForm={editForm} />
            <AlertModal alertModalOpen={alertModalOpen} setAlertModalOpen={setAlertModalOpen} modalText={modalText} />
        </>
    )
})

TableDropdownMenu.displayName = 'TableDropdownMenu'

export default TableDropdownMenu