"use client"

import React, { FC, ReactNode, memo, useCallback, useState } from "react"
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
import ShowModal from "../modal/ShowModal"
import ShowContents from "../../admin/show/ShowContents"

const HeaderDropdownMenu: FC = memo(() => {
    const [open, setOpen] = useState(false);
    const [showModalOpen, setShowModalOpen] = useState(false);
    const handleMouseEnter = useCallback(() => setOpen(true), []);
    const handleMouseLeave = useCallback(() => setOpen(false), []);

    const handleShowClick = useCallback(() => {
        setShowModalOpen(true);
    }, []);
    return (
        <>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <div onMouseEnter={handleMouseEnter}>
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
                    <DropdownMenuContent className="w-56" onMouseLeave={handleMouseLeave}>
                        <DropdownMenuLabel>山田太郎</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <MenuItem icon={<User className="mr-2 h-4 w-4" />} label="詳細" onClick={handleShowClick} />
                            <MenuItem icon={<Settings className="mr-2 h-4 w-4" />} href="#" label="設定" />
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <MenuItem icon={<LogOut className="mr-2 h-4 w-4" />} href="#" label="ログアウト" />
                    </DropdownMenuContent>
                </div>
            </DropdownMenu>
            <ShowModal showModalOpen={showModalOpen} setShowModalOpen={setShowModalOpen} showContents={<ShowContents id={1} />} />
        </>
    )
})

type MenuItemProps = {
    icon: ReactNode;
    href?: string;
    label: string;
    onClick?: () => void;
};

const MenuItem: FC<MenuItemProps> = memo(({ icon, href, label, onClick }) => {
    const content = <span className="text-xs cursor-pointer flex-1">{label}</span>;
    return (
        <DropdownMenuItem onClick={onClick}>
            {icon}
            {href ? <Link href={href} className="flex-1">{content}</Link> : content}
        </DropdownMenuItem>
    )
});

HeaderDropdownMenu.displayName = 'HeaderDropdownMenu'
MenuItem.displayName = 'MenuItem'

export default HeaderDropdownMenu