"use client"

import React, { FC, memo } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import StoreValidation from './Validation'
import { AdminNewType } from '../types/AdminType'
import InputControl from '../../components/form/InputControl'
import SelectBox from '../../components/form/SelectBox'

const Form: FC = memo(() => {
    const form = useForm<AdminNewType>({
        resolver: zodResolver(StoreValidation),
        defaultValues: {
            name: "",
        },
    })

    function onSubmit(values: AdminNewType) {
        console.log(values)
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-1/2">
                <InputControl name='name' label='名前' placeholder='山田太郎' />
                <SelectBox name='role' label='権限' placeholder='権限を選択してください' />
                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    )
})
Form.displayName = 'Form'
export default Form