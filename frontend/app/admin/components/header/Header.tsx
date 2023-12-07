"use client"

import React, { FC, memo } from "react"
import styles from '../../styles/header.module.css'
import Link from "next/link"
import HeaderNavigationMenu from "./HeaderNavigationMenu"
import HeaderDropdownMenu from "./HeaderDropdownMenu"

const Header: FC = memo(() => {
    return (
        <header className={styles.header}>
            <div>
                <Link href={'/'}>
                    <h2 className="text-xl font-medium">Next.js</h2>
                </Link>
            </div>
            <div>
                <div className="flex items-center">
                    <HeaderNavigationMenu />
                    <p className="text-white border-s border-gray-300 ml-8">a</p>
                    <div className="ml-4">
                        <HeaderDropdownMenu />
                    </div>
                </div>
            </div>
        </header >
    )
})

Header.displayName = 'Header'

export default Header