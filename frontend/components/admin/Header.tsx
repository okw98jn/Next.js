import React from 'react'
import styles from '../../styles/admin/header.module.css'

const Header: React.FC = React.memo(() => {
    return (
        <header className={styles.header}>
        </header >
    )
})

Header.displayName = 'Header'
export default Header