import * as React from 'react'
import { Tabs } from 'antd'

import ListView from './component/listView'

const { TabPane } = Tabs
const { useState } = React

const Home = () => {
    const datas = [
        {
            href: 'http://ant.design',
            title: `我是标题 `,
            description: '我是描述信息',
            content:
                '八百八十八万，对于苏家这种二流世家来说，这样的彩礼钱几乎已经是天文数字。苏家老太太拄拐起身，摇摇晃晃的走到报礼人面前，神色激动的问道：“请问，你们是什么人，又是看上了我苏家哪位闺女。” 一听到这话，几个没有成婚的苏家后辈女子激动得面红耳赤，虽然不知道对方是谁，可是能拿出这么惊人的聘礼，那必定是个豪门啊，嫁入豪门，可是她们做梦都在想的事情'
        },
        {
            href: 'http://ant.design',
            title: `我是标题 1`,
            description: '我是描述信息',
            content:
                '八百八十八万，对于苏家这种二流世家来说，这样的彩礼钱几乎已经是天文数字。苏家老太太拄拐起身，摇摇晃晃的走到报礼人面前，神色激动的问道：“请问，你们是什么人，又是看上了我苏家哪位闺女。” 一听到这话，几个没有成婚的苏家后辈女子激动得面红耳赤，虽然不知道对方是谁，可是能拿出这么惊人的聘礼，那必定是个豪门啊，嫁入豪门，可是她们做梦都在想的事情'
        }
    ]

    const [data, setData] = useState(datas)
    function callback(key: string) {
        console.log(key)
    }
    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="最新发布" key="1">
                <ListView dataSoure={data} />
            </TabPane>
            <TabPane tab="最多阅读" key="2">
                <ListView dataSoure={data} />
            </TabPane>
        </Tabs>
    )
}

export default Home
