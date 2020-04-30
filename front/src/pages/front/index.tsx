import React from 'react'
import { Tabs } from 'antd'

import './styles.scss'

import BigListView from '../../components/bigListView'
import Catalog from './component/catalog'

const { TabPane } = Tabs

function Front() {
    let ar: number[] = [1, 2, 3, 4, 5, 6, 7, 0]
    return (
        <div className="card-container">
            <Tabs type="card" defaultActiveKey="3">
                <TabPane tab="文章列表" key="1">
                    {ar.map(item => (
                        <BigListView key={item} />
                    ))}
                </TabPane>
                <TabPane tab="文章存档" key="3">
                    <Catalog />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Front
