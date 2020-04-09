import * as React from 'react'

import './style.scss'

import menuConfig from '../../pages/menuConfig'

const { useState, useCallback, useMemo } = React

const NavMenu = () => {
    const [state, setstate] = useState(0)
    function toggleMenu(key: number) {
        setstate(key)
    }
    return (
        <ul className="nav-list">
            {menuConfig.map((menu, key) => {
                return (
                    <li key={menu.path} className={state === key ? 'active' : ''} onClick={toggleMenu.bind(null, key)}>
                        <a href={menu.path}>{menu.name}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavMenu
