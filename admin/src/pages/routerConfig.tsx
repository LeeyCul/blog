import * as React from 'react'

const { lazy } = React
const Home = lazy(() => import('./home'))
const Test = lazy(() => import('./test'))

export default [
    { path: '/', component: Home, exact: true },
    { path: '/a', component: Test, exact: true }
]
