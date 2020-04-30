import React, { useEffect, useState, memo, useCallback } from 'react'
import { Row, Col } from 'antd'

import './styles.scss'

import ArticleView from '../../../components/articleView'
import * as Api from '../service'

function NewRelease() {
    const [data, setData] = useState([])

    const fetchData = useCallback(() => {
        Api.latestRelease({}, { showLoading: true }).then(res => {
            const { list } = res
            setData(list)
        })
    }, [data])

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="newRelease">
            <h3 className="title">最新发布</h3>
            <div className="listView">
                <Row justify="space-between" gutter={[{ xs: 0, sm: 0, md: 6, lg: 6 }, 8]}>
                    {data.length &&
                        data.map((item: any, key) => {
                            return (
                                <Col xs={24} sm={24} md={24} lg={12} xl={12} key={key}>
                                    <ArticleView imgUrl={item.imgherf} description={item.description} title={item.title} linkUrl="/front/det" />
                                </Col>
                            )
                        })}
                </Row>
            </div>
        </div>
    )
}

export default memo(NewRelease)
