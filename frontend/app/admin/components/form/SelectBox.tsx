"use client"

import React, { FC, memo } from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useFormContext } from "react-hook-form";

type SelectItem = {
    value: string;
    text: string;
}

type Props = {
    name: string
    label: string
    placeholder: string
    selectItems: SelectItem[]
}

const SelectBox: FC<Props> = memo(({ name, label, placeholder, selectItems }) => {
    const { control } = useFormContext();
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {selectItems.map((selectItem) => (
                                <SelectItem key={selectItem.value} value={selectItem.value}>{selectItem.text}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage className='font-normal text-destructive' />
                </FormItem>
            )}
        />
    )
})

SelectBox.displayName = 'SelectBox'

export default SelectBox