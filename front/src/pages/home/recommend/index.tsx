import React from 'react'

import './styles.scss'

import RecommendView from '../../../components/recommendView'

function Recommend() {
    return (
        <div className="recommend_conainer">
            <h3 className="title">特别推荐</h3>
            <RecommendView />
        </div>
    )
}

export default Recommend
