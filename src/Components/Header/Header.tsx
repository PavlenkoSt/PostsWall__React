import React from 'react'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to='/' className={s.logo}>
                <img src="/icons/logo.svg" alt="posts"/>
            </NavLink>
        </header>
    )
}

export default Header
