import React, { FC, memo } from 'react'
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"

type Props = {
    showModalOpen: boolean;
    setShowModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    showContents: React.ReactNode;
}

const ShowModal: FC<Props> = memo(({ showModalOpen, setShowModalOpen, showContents }) => {
    return (
        <Dialog open={showModalOpen} onOpenChange={setShowModalOpen}>
            <DialogContent className='p-10'>
                {React.cloneElement(showContents as React.ReactElement, { setShowModalOpen })}
            </DialogContent>
        </Dialog>
    )
})

ShowModal.displayName = 'ShowModal'

export default ShowModal