"use client"

import React, { FC, memo } from "react"
import {
    LogOut,
    Settings,
    User,
} from "lucide-react"
import { FaUserCircle } from "react-icons/fa";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import Icon from "@/components/atoms/Icon";

const HeaderDropdownMenu: FC = memo(() => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <p className="cursor-pointer hover:opacity-70 transition-all duration-200">
                    <Icon icon={<FaUserCircle />} size="35px" />
                </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>大川心</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <Link href={'/'} className="flex-1">
                            <p className="text-xs">マイページ</p>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <Link href={'/'} className="flex-1">
                            <span className="text-xs">設定</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <Link href={'/'} className="flex-1">
                        <span className="text-xs">ログアウト</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
})

HeaderDropdownMenu.displayName = 'HeaderDropdownMenu'

export default HeaderDropdownMenu