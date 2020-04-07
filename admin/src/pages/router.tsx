import * as React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'

import PrivateRoute from '../components/privatRoute'
import routerConfig from './routerConfig'
import BaseLayout from '../layout'
import Login from './login'

const { Suspense } = React
const Home = () => {
    return (
        <Suspense fallback={<LoadingOutlined />}>
            <BrowserRouter>
                <BaseLayout>
                    {routerConfig.map((route: any) => {
                        return <PrivateRoute {...route} key={route.path} />
                    })}
                </BaseLayout>
                <Route path="/login" component={Login} exact />
                {/* <Redirect from="/" to="/" exact /> */}
            </BrowserRouter>
        </Suspense>
    )
}

export default Home
