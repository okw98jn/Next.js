import React, { FC, memo } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type Props = {
    alertModalOpen: boolean;
    setAlertModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalText: string;
}

const AlertModal: FC<Props> = memo(({ alertModalOpen, setAlertModalOpen, modalText }) => {
    return (
        <AlertDialog open={alertModalOpen} onOpenChange={setAlertModalOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{modalText}を削除しますか?</AlertDialogTitle>
                    <AlertDialogDescription>
                        <span className='block'>削除した{modalText}を元に戻すことはできません</span>
                        <span className='block'>{modalText}を削除しますか？</span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className='w-24'>キャンセル</AlertDialogCancel>
                    <AlertDialogAction className='w-24'>削除</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
})

AlertModal.displayName = 'AlertModal'

export default AlertModal