"use client"

import React, { FC, memo, useCallback, useState } from 'react'
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
import Icon from "@/components/atoms/Icon";
import { CgMenuGridO } from "react-icons/cg";
import { Button } from '@/components/ui/button'
import AlertModal from '../modal/AlertModal';
import EditModal from '../modal/EditModal';
import ShowModal from '../modal/ShowModal';

type TableDropdownMenuProps = {
    text: string;
    showContents: React.ReactNode;
    editForm: React.ReactNode;
    modalText: string;
}

const TableDropdownMenu: FC<TableDropdownMenuProps> = memo(({ text, showContents, editForm, modalText }) => {
    const [showModalOpen, setShowModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [alertModalOpen, setAlertModalOpen] = useState(false);

    const handleShowClick = useCallback(() => {
        setShowModalOpen(true);
    }, []);
    const handleEditClick = useCallback(() => {
        setEditModalOpen(true);
    }, []);
    const handleDeleteClick = useCallback(() => {
        setAlertModalOpen(true);
    }, []);

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
                            <span className="text-xs cursor-pointer flex-1" onClick={handleShowClick}>詳細</span>
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
            <ShowModal showModalOpen={showModalOpen} setShowModalOpen={setShowModalOpen} showContents={showContents} />
            <EditModal editModalOpen={editModalOpen} setEditModalOpen={setEditModalOpen} modalText={modalText} editForm={editForm} />
            <AlertModal alertModalOpen={alertModalOpen} setAlertModalOpen={setAlertModalOpen} modalText={modalText} />
        </>
    )
})

TableDropdownMenu.displayName = 'TableDropdownMenu'

export default TableDropdownMenu