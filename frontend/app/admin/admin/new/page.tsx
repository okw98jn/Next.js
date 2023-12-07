"use client"

import Icon from '@/components/atoms/Icon'
import React, { FC, memo } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import Form from './Form'
import CardContainer from '../../components/layout/CardContainer'

const page: FC = memo(() => {
    return (
        <CardContainer>
            <Icon icon={<FaUserCircle />} color='#2a3f54da' size='40px' />
            <p className="text-lg text-gray-700 mt-1 mb-8 font-medium">管理者追加</p>
            <Form />
        </CardContainer>
    )
})

page.displayName = 'page'
export default page