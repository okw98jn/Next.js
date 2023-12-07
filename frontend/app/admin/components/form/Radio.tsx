"use client"

import React, { FC, memo } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useFormContext } from "react-hook-form";

type RadioItem = {
    value: string;
    text: string;
}

type Props = {
    name: string
    label: string
    radioItems: RadioItem[]
}

const Radio: FC<Props> = memo(({ name, label, radioItems }) => {
    const { control } = useFormContext();
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-1 items-center"
                        >
                            {radioItems.map((radioItem) => (
                                <FormItem key={radioItem.value} className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value={radioItem.value} />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">{radioItem.text}</FormLabel>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage className='font-normal text-destructive' />
                </FormItem>
            )}
        />
    )
})

Radio.displayName = 'Radio'

export default Radio