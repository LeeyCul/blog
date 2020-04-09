import * as React from 'react'
import { Layout, Row, Col } from 'antd'

import './styles.scss'

import Nav from './Nav'
import Logo from './logo'
import PageFooter from './footer'

const { Content, Footer, Header } = Layout

interface IProps {
    children: React.ReactNode
}

const BaseLayout: React.FC<IProps> = ({ children }) => {
    return (
        <Layout className="layout">
            <Header className="header-conainer">
                <Row>
                    <Col xs={24} sm={24} md={4} lg={4} xl={4} offset={2}>
                        <Logo />
                    </Col>
                    <Col xs={0} sm={0} md={14} lg={14} xl={14}>
                        <Nav />
                    </Col>
                </Row>
            </Header>

            <Content className="content">
                <Row justify="center">
                    <Col xs={24} sm={24} md={18} lg={20} xl={20}>
                        <div className="content-conainer">{children}</div>
                    </Col>
                </Row>
            </Content>

            <Footer className="footer">
                <PageFooter />
            </Footer>
        </Layout>
    )
}
export default BaseLayout
