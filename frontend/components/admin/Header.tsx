"use client"

import React, { FC, memo } from "react"
import styles from '../../styles/admin/header.module.css'
import Link from "next/link"
import HeaderNavigationMenu from "./HeaderNavigationMenu"


const Header: FC = memo(() => {
    return (
        <header className={styles.header}>
            <div>
                <Link href={'/'}>
                    <h2 className="text-xl font-medium">Next.js</h2>
                </Link>
            </div>
            <div>
                <HeaderNavigationMenu />
            </div>
        </header >
    )
})

Header.displayName = 'Header'

export default Header