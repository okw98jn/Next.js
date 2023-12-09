import React, { FC, memo } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

type Props = {
    editModalOpen: boolean;
    setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalText: string;
    editForm: React.ReactNode;
}

const EditModal: FC<Props> = memo(({ editModalOpen, setEditModalOpen, modalText, editForm }) => {
    const dialogTitle = `${modalText}編集`;
    const dialogDescription = `${modalText}の情報を編集することができます`;

    return (
        <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
            <DialogContent className='p-10'>
                <DialogHeader>
                    <DialogTitle className='mb-2'>{dialogTitle}</DialogTitle>
                    <DialogDescription>
                        <span className='block'>{dialogDescription}</span>
                        <span className='block'>編集したい項目を入力してください</span>
                    </DialogDescription>
                </DialogHeader>
                {/* 各ドメインに対応 */}
                {React.cloneElement(editForm as React.ReactElement, { setEditModalOpen })}
            </DialogContent>
        </Dialog>
    )
})

EditModal.displayName = 'EditModal'

export default EditModal