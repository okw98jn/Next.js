"use client"

import React, { FC, memo } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import StoreValidation from './Validation'
import { AdminNewType } from '../types/AdminType'
import InputControl from '../../components/form/InputControl'
import SelectBox from '../../components/form/SelectBox'
import { AdminRoleList, AdminStatus, AdminStatusList } from '../../const/AdminConst'
import Radio from '../../components/form/Radio'

const Form: FC = memo(() => {
    const form = useForm<AdminNewType>({
        resolver: zodResolver(StoreValidation),
        defaultValues: {
            name: "",
            login_id: "",
            role: "",
            status: AdminStatus.StatusValid,
        },
    })

    function onSubmit(values: AdminNewType) {
        console.log(values)
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-1/2">
                <InputControl name='name' label='名前' placeholder='山田太郎' />
                <InputControl name='login_id' label='ログインID' placeholder='ログインID' />
                <SelectBox name='role' label='権限' placeholder='権限を選択してください' selectItems={AdminRoleList} />
                <Radio name='status' label='ステータス' radioItems={AdminStatusList} />
                <Button type="submit">登録</Button>
            </form>
        </FormProvider>
    )
})
Form.displayName = 'Form'
export default Form