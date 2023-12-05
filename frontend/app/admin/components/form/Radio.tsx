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
                            className="flex flex-col space-y-1"
                        >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="all" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                    All new messages
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="mentions" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                    Direct messages and mentions
                                </FormLabel>
                            </FormItem>
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
})

Radio.displayName = 'Radio'

export default Radio