import * as React from 'react'
import { Row, Col, Space } from 'antd'

import './styles.scss'

import Carousels from './component/carousel'
import Synopsis from '../../components/synopsis'

function Home() {
    return (
        <div className="homeConainer">
            <Row gutter={[{ xs: 0, sm: 0, md: 14, lg: 16 }, 10]}>
                <Col xs={24} sm={24} md={17} lg={18} xl={19}>
                    <div className="leftConent">
                        <Carousels />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={7} lg={6} xl={5}>
                    <div className="rightConent">
                        <Synopsis />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home
