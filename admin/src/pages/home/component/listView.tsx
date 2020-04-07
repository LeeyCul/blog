import * as React from 'react'
import { List, Avatar } from 'antd'

interface IProps {
    dataSoure: Array<any>
}

const ListView: React.FC<IProps> = ({ dataSoure }) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            dataSource={dataSoure}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    extra={<img width={372} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                    <List.Item.Meta title={<a href={item.href}>{item.title}</a>} description={item.description} />
                    {item.content}
                </List.Item>
            )}
        />
    )
}

export default ListView
