import React, { useCallback, useMemo, useState } from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import './styles.scss'

import Carousels from './component/carousel'
import Synopsis from '../../components/synopsis'
import { actions } from '../../store/actions'
import Recommend from './recommend'
import NewRelease from './newRelease'

interface Props extends Stores.StoreState {
    dispatch: Dispatch
    setFrom: { (from: string): string }
    setTo: { (): boolean }
}

function Home(props: Props) {
    const { to, from, dispatch, setTo, setFrom } = props
    return (
        <div className="homeConainer">
            <Carousels />
            <Recommend />
            <NewRelease />
        </div>
    )
}

function stateToprops(state: Stores.StoreState) {
    return {
        to: state.to,
        from: state.from
    }
}

function dispatchToprops(dispatch: Dispatch) {
    return bindActionCreators<any, any>(actions, dispatch)
}

export default connect(stateToprops, dispatchToprops)(Home)
