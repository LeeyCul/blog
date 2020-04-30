import * as React from 'react'

const { lazy } = React
const Home = lazy(() => import('./home'))
const Front = lazy(() => import('./front'))
const Project = lazy(() => import('./project'))
const Navigation = lazy(() => import('./navigation'))
const Detailed = lazy(() => import('./detailed'))

export default [
    { path: '/', component: Home, exact: true },
    { path: '/2', component: Front },
    { path: '/1w', component: Project },
    { path: '/46', component: Navigation },
    { path: '/front/det', component: Detailed }
]
