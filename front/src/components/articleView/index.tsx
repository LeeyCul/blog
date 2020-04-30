import React, { memo } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import PropTypes from 'prop-types'

import './styles.scss'

interface ArticleView extends RouteComponentProps, CommonComponent.RecommendView {}

function ArticleView(props: ArticleView) {
    const { title, description, imgUrl, linkUrl } = props

    function gotoUrl() {
        props.history.push(`${linkUrl}`)
    }
    return (
        <div className="article_conainer" onClick={gotoUrl}>
            <img src={imgUrl} alt="" width="100%" height="100%" />
            <div className="content_box">
                <h3>{title}</h3>
                <div className="text">{description}</div>
            </div>
        </div>
    )
}

export default withRouter(memo(ArticleView))

ArticleView.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    linkUrl: PropTypes.string
}
