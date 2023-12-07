"use client"

import React, { FC, memo, useState } from "react"
import {
    ChevronDown,
    LogOut,
    Settings,
    User,
} from "lucide-react"

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

const HeaderDropdownMenu: FC = memo(() => {
    const [open, setOpen] = useState(false);
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <div onMouseEnter={() => setOpen(true)}>
                <DropdownMenuTrigger asChild>
                    <div
                        className="group cursor-pointer inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        <p>山田太郎</p>
                        <ChevronDown
                            className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                            aria-hidden="true"
                        />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" onMouseLeave={() => setOpen(false)}>
                    <DropdownMenuLabel>山田太郎</DropdownMenuLabel>
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
            </div>
        </DropdownMenu>
    )
})

HeaderDropdownMenu.displayName = 'HeaderDropdownMenu'

export default HeaderDropdownMenu