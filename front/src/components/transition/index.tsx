import React from 'react'
import 'animate.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

interface IProps {
    children: React.ReactNode
}

const Transition: React.FC<IProps> = ({ children }) => {
    return (
        <div>
            <ReactCSSTransitionGroup
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={350}
                transitionLeaveTimeout={150}
                transitionName="animated"
                style={{ display: 'flex' }}
            >
                {children}
            </ReactCSSTransitionGroup>
        </div>
    )
}

export default Transition
