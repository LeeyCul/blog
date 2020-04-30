import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'

import PrivateRoute from '../components/privatRoute'
import routerConfig from './routerConfig'
import BaseLayout from '../layout'

const { Suspense } = React

const Routers = () => {
    return (
        <Suspense fallback={<LoadingOutlined />}>
            <BrowserRouter>
                <BaseLayout>
                    {routerConfig.map((route: any) => {
                        return <PrivateRoute {...route} key={route.path} />
                    })}
                </BaseLayout>
            </BrowserRouter>
        </Suspense>
    )
}
export default Routers
