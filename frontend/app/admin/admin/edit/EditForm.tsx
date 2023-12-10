"use client"

import React, { FC, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import InputControl from '../../components/form/InputControl';
import SelectBox from '../../components/form/SelectBox';
import Radio from '../../components/form/Radio';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { AdminRoleList, AdminStatus, AdminStatusList } from '../../const/AdminConst';
import { AdminNewType } from '../types/AdminType';
import UpdateValidator from './UpdateValidator';
import { useShowToast } from '@/hooks/useShowToast';

const FORM_LABELS = {
    name: '名前',
    login_id: 'ログインID',
    role: '権限',
    status: 'ステータス',
};

const FORM_PLACEHOLDERS = {
    name: '山田太郎',
    login_id: 'ログインID',
    role: '権限を選択してください',
};

const DEFAULT_VALUES: AdminNewType = {
    name: "",
    login_id: "",
    role: "",
    status: AdminStatus.StatusValid,
};

type Props = {
    id: number;
    setEditModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditForm: FC<Props> = memo(({ id, setEditModalOpen }) => {
    const showToast = useShowToast();
    const form = useForm<AdminNewType>({
        resolver: zodResolver(UpdateValidator),
        defaultValues: DEFAULT_VALUES,
    })

    function onSubmit(values: AdminNewType) {
        console.log(values)
        setEditModalOpen && setEditModalOpen(false);
        showToast({ message: '管理者情報を更新しました', variant: 'success' });
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/2">
                <div className="space-y-3">
                    <InputControl name='name' label={FORM_LABELS.name} placeholder={FORM_PLACEHOLDERS.name} />
                    <InputControl name='login_id' label={FORM_LABELS.login_id} placeholder={FORM_PLACEHOLDERS.login_id} />
                    <SelectBox name='role' label={FORM_LABELS.role} placeholder={FORM_PLACEHOLDERS.role} selectItems={AdminRoleList} />
                    <Radio name='status' label={FORM_LABELS.status} radioItems={AdminStatusList} />
                </div>
                <div className='mt-6'>
                    <Button type="submit" className='w-full'>編集</Button>
                </div>
            </form>
        </FormProvider>
    )
})

EditForm.displayName = 'EditForm'

export default EditForm