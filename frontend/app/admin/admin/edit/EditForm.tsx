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

type Props = {
    id: number;
    setEditModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditForm: FC<Props> = memo(({ id, setEditModalOpen }) => {
    const form = useForm<AdminNewType>({
        resolver: zodResolver(UpdateValidator),
        defaultValues: {
            name: "",
            login_id: "",
            role: "",
            status: AdminStatus.StatusValid,
        },
    })

    function onSubmit(values: AdminNewType) {
        console.log(values)
        setEditModalOpen && setEditModalOpen(false);
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/2">
                <div className="space-y-3">
                    <InputControl name='name' label='名前' placeholder='山田太郎' />
                    <InputControl name='login_id' label='ログインID' placeholder='ログインID' />
                    <SelectBox name='role' label='権限' placeholder='権限を選択してください' selectItems={AdminRoleList} />
                    <Radio name='status' label='ステータス' radioItems={AdminStatusList} />
                </div>
                <div className='mt-6'>
                    <Button type="submit">登録</Button>
                </div>
            </form>
        </FormProvider>
    )
})

EditForm.displayName = 'EditForm'

export default EditForm