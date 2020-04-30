import React from 'react'
import { Tabs } from 'antd'

import './styles.scss'
import ListView from './component/listView'

const { TabPane } = Tabs

const Navigation: React.FC<CommonComponent.Navigation> = () => {
    const tabs: CommonComponent.Navigation[] = [
        { title: '前端开发', key: '1' },
        { title: '前端学习', key: '2' },
        { title: '插件推荐', key: '3' },
        { title: '设计欣赏', key: '4' },
        { title: '源代码', key: '5' },
        { title: '小工具', key: '6' },
        { title: '图标', key: '7' },
        { title: '字体', key: '8' }
    ]

    function callback(key: string) {
        console.log(key)
    }

    return (
        <div className="navigation_conainer">
            <Tabs defaultActiveKey="1" onChange={callback} tabPosition="left">
                {tabs.map(item => {
                    return (
                        <TabPane tab={item.title} key={item.key}>
                            <ul>
                                <ListView />
                                <ListView />
                                <ListView />
                                <ListView />
                                <ListView />
                                <ListView />
                                <ListView />
                            </ul>
                        </TabPane>
                    )
                })}
            </Tabs>
        </div>
    )
}

export default Navigation
