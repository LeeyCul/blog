import React, { memo } from 'react'
import { Layout, Row, Col, Affix } from 'antd'

import './styles.scss'

import Nav from './Nav'
import Logo from './logo'
import PageFooter from './footer'
import Synopsis from '../components/synopsis'
import EchartsWordCloud from '../components/echartsWordCloud'
import Loading from '../components/loading'

const { Content, Footer, Header } = Layout

interface IProps {
    children: React.ReactNode
}

const BaseLayout: React.FC<IProps> = ({ children }) => {
    return (
        <div>
            <Loading />
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
                    <Row justify="center" gutter={[{ xs: 0, sm: 0, md: 14, lg: 16 }, 10]}>
                        <Col xs={24} sm={24} md={16} lg={18} xl={18}>
                            <div className="content_conainer">{children}</div>
                        </Col>
                        <Col xs={24} sm={24} md={6} lg={5} xl={5}>
                            <div className="silder_right">
                                <Affix offsetTop={5}>
                                    <Synopsis />
                                </Affix>
                                <Affix offsetTop={400}>
                                    <EchartsWordCloud />
                                </Affix>
                            </div>
                        </Col>
                    </Row>
                </Content>

                <Footer className="footer">
                    <PageFooter />
                </Footer>
            </Layout>
        </div>
    )
}
export default memo(BaseLayout)
