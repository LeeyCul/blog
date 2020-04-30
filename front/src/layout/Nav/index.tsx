import * as React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './style.scss'

import menuConfig from '../../pages/menuConfig'
import Transition from '../../components/transition'

const { useState, memo } = React

const NavMenu = () => {
    const [state, setstate] = useState(0)

    function toggleMenu(key: number) {
        setstate(key)
    }

    return (
        <ul className="nav-list">
            <Transition>
                {menuConfig.map((menu, key) => {
                    return (
                        <Link to={menu.path} key={menu.path}>
                            <li
                                key={menu.path}
                                className={classNames('animated', { active: state === key, bounceIn: state === key })}
                                onClick={toggleMenu.bind(null, key)}
                            >
                                {menu.name}
                            </li>
                        </Link>
                    )
                })}
            </Transition>
        </ul>
    )
}

export default memo(NavMenu)
