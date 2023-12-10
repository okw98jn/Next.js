import React, { FC, memo, useState, useMemo, useCallback, useEffect, useRef } from 'react';
import EditForm from "../edit/EditForm";
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DetailPage from './DetailPage';
import ToggleLink from '../../components/showPage/ToggleLink';
import Loading from '../../components/showPage/Loading';

type Props = {
    id: number;
    setShowModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowContents: FC<Props> = memo(({ id, setShowModalOpen }) => {
    const [editFormOpen, setEditFormOpen] = useState<boolean | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const isFirstRender = useRef(true);

    // ダイアログの内容を編集モードによって切り替える
    const dialogContents = useMemo(() => {
        const dialogTitle = editFormOpen ? '管理者編集' : '管理者詳細';
        const dialogDescription = editFormOpen ? '管理者の情報を編集することができます' : '管理者の情報を確認することができます';
        const dialogDescriptionSub = editFormOpen ? '編集したい項目を入力してください' : '編集アイコンを押すと編集モードに切り替わります';
        return { dialogTitle, dialogDescription, dialogDescriptionSub };
    }, [editFormOpen]);
    const { dialogTitle, dialogDescription, dialogDescriptionSub } = dialogContents;

    // 編集モードの切り替えハンドラ
    const handleOnClick = useCallback(() => {
        setEditFormOpen(!editFormOpen);
    }, [editFormOpen]);

    // 編集モードが切り替わったときのエフェクト
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }, [editFormOpen]);

    //編集モードかどうかで表示するコンテンツを切り替える関数
    const renderContent = () => {
        if (editFormOpen) {
            return <EditForm id={id} setEditModalOpen={setShowModalOpen} />;
        }
        return <DetailPage />;
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <div className='mb-3'>
                <DialogHeader className="mb-2">
                    <DialogTitle className='mb-2'>{dialogTitle}</DialogTitle>
                    <DialogDescription>
                        <span className='block'>{dialogDescription}</span>
                        <span className='block'>{dialogDescriptionSub}</span>
                    </DialogDescription>
                </DialogHeader>
                {renderContent()}
            </div>
            <ToggleLink handleOnClick={handleOnClick} isEditFormOpen={editFormOpen} />
        </div>
    )
})

ShowContents.displayName = 'ShowContents'

export default ShowContents