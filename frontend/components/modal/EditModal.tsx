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
    return (
        <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{modalText}</DialogTitle>
                    <DialogDescription>
                        {editForm}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
})

EditModal.displayName = 'EditModal'

export default EditModal