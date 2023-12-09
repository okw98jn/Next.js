import React, { FC, createContext, memo, useContext } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

type EditModalContextType = {
    setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditModalContext = createContext<EditModalContextType | undefined>(undefined);

export const useEditModal = () => {
    const context = useContext(EditModalContext);
    return context;
};

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
                <EditModalContext.Provider value={{ setEditModalOpen }}>
                    {/* 各ドメインに対応 */}
                    {editForm}
                </EditModalContext.Provider>
            </DialogContent>
        </Dialog>
    )
})

EditModal.displayName = 'EditModal'

export default EditModal