import React from 'react'
import { Row, Col } from 'antd'

import './styles.scss'

function BigListView() {
    return (
        <div className="list_view_conainer">
            <div className="list_time">
                <span>2020/04</span>
                <span>04&nbsp;&nbsp;周六</span>
            </div>
            <Row justify="center">
                <Col xs={0} sm={0} md={4} lg={6} xl={6}>
                    <div className="img_box">
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" width="100%" height="100%" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={14} lg={18} xl={18}>
                    <div className="conent_conainer">
                        <div className="title">我是仪表标题</div>
                        <div className="content_text">
                            我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本我是描述文本
                        </div>
                        <div className="tag">标签:&nbsp;#css</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BigListView
