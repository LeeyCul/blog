import React, { memo } from 'react'
import Echarts from 'echarts-for-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import './styles.scss'

import { getOption } from './options'

function WordClound(props: RouteComponentProps) {
    const data = [
        { name: 'css', value: 2226013, symbolSize: 3 },
        { name: '前端', value: 2226013, symbolSize: 100 },
        { name: 'js', value: 2226013, symbolSize: 20 },
        { name: 'css1', value: 2226013, symbolSize: 3 },
        { name: '前端1', value: 2226013, symbolSize: 30 },
        { name: 'js1', value: 2226013, symbolSize: 20 },
        { name: 'css2', value: 2226013, symbolSize: 3 },
        { name: '前端3', value: 2226013, symbolSize: 30 },
        { name: 'js3', value: 2226013, symbolSize: 20 },
        { name: 'css4a', value: 2226013, symbolSize: 3 },
        { name: '前端5a', value: 2226013, symbolSize: 30 }
    ]
    let onEvents = {
        click: handleClick
    }

    function handleClick(param: any) {
        if (props.location.pathname === '/2') {
        } else {
            props.history.push('/2')
        }
    }

    return (
        <div className="echarts_box">
            <Echarts option={getOption(data)} lazyUpdate={true} onEvents={onEvents} />
        </div>
    )
}

export default withRouter(memo(WordClound))
