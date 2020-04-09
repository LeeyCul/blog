import * as React from 'react'

const { lazy } = React
const Home = lazy(() => import('./home'))

export default [{ path: '/', component: Home, exact: true }]
