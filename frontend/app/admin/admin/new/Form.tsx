"use client"

import React, { FC, memo } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import StoreValidator from './StoreValidator'
import { AdminNewType } from '../types/AdminType'
import InputControl from '../../components/form/InputControl'
import SelectBox from '../../components/form/SelectBox'
import { AdminRoleList, AdminStatus, AdminStatusList } from '../../const/AdminConst'
import Radio from '../../components/form/Radio'
import { useShowToast } from '@/hooks/useShowToast'
import { useRouter } from 'next/navigation'

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

const Form: FC = memo(() => {
    const router = useRouter();
    const showToast = useShowToast();

    const form = useForm<AdminNewType>({
        resolver: zodResolver(StoreValidator),
        defaultValues: DEFAULT_VALUES,
    })

    function onSubmit(values: AdminNewType) {
        console.log(values)
        router.push('/admin/admin/list')
        showToast({ message: '管理者を登録しました', variant: 'success' });
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2">
                <div className="space-y-3">
                    <InputControl name='name' label={FORM_LABELS.name} placeholder={FORM_PLACEHOLDERS.name} />
                    <InputControl name='login_id' label={FORM_LABELS.login_id} placeholder={FORM_PLACEHOLDERS.login_id} />
                    <SelectBox name='role' label={FORM_LABELS.role} placeholder={FORM_PLACEHOLDERS.role} selectItems={AdminRoleList} />
                    <Radio name='status' label={FORM_LABELS.status} radioItems={AdminStatusList} />
                </div>
                <div className='mt-6'>
                    <Button type="submit" className='w-full'>登録</Button>
                </div>
            </form>
        </FormProvider>
    )
})
Form.displayName = 'Form'
export default Form