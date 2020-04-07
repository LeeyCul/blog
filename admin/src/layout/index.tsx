import * as React from 'react'
import { Layout, Breadcrumb } from 'antd'

import './styles.scss'

import AsideMenu from './asideMenu'
import Headers from './header'
import Logo from './logo'
import PageFooter from './footer'

const { useState } = React
const { Content, Sider, Footer, Header } = Layout

interface IProps {
    children: React.ReactNode
}

const BaseLayout: React.FC<IProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false)

    function onCollapse(collapsed: boolean) {
        setCollapsed(collapsed)
    }

    return (
        <Layout className="layout">
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <Logo />
                <AsideMenu />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: '#fff' }}>
                    <Headers />
                </Header>
                <Content className="content">
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="conent-conainer">{children}</div>
                </Content>
                <Footer className="footer">
                    <PageFooter />
                </Footer>
            </Layout>
        </Layout>
    )
}
export default BaseLayout
