import * as React from 'react'
import { Menu } from 'antd'
import { Link, BrowserRouter } from 'react-router-dom'
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'

import menuConfig from '../../pages/menuConfig'

const { SubMenu } = Menu

const NavBar = () => {
    return (
        <Menu theme="dark" defaultSelectedKeys={['/']} mode="inline">
            {createMenu(menuConfig)}
        </Menu>
    )
}

const createMenu = (arr: Array<any> = []) => {
    return arr.map(r => {
        const { name, path } = r
        if (r.children) {
            return (
                <SubMenu
                    key={path}
                    title={
                        <span>
                            <span>{name}</span>
                        </span>
                    }
                >
                    {createMenu(r.children)}
                </SubMenu>
            )
        } else {
            return (
                <Menu.Item key={path}>
                    <Link to={path}>
                        <span>{name}</span>
                    </Link>
                </Menu.Item>
            )
        }
    })
}
export default NavBar
