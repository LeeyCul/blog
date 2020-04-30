import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

import './index.css'

import App from './pages/router'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zh_CN}>
            <App />
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
)
