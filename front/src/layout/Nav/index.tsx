import * as React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

import menuConfig from '../../pages/menuConfig'

const { useState } = React

const NavMenu = () => {
    const [state, setstate] = useState(0)
    function toggleMenu(key: number) {
        setstate(key)
    }
    return (
        <ul className="nav-list">
            {menuConfig.map((menu, key) => {
                return (
                    <Link to={menu.path} key={menu.path}>
                        <li className={state === key ? 'active' : ''} onClick={toggleMenu.bind(null, key)}>
                            {menu.name}
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default NavMenu
