"use client"

import React, { FC, memo } from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form";

type Props = {
    name: string
    label: string
    placeholder: string
}

const InputControl: FC<Props> = memo(({name, label, placeholder}) => {
    const { control } = useFormContext();
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormMessage className='font-normal text-red-700' />
                </FormItem>
            )}
        />
    )
})

InputControl.displayName = 'InputControl'

export default InputControl