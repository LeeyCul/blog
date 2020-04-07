import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

interface PrivateRouteProps {
    component: any
    location: any
    isAuthenticated: () => boolean
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            // !!isAuthenticated()
            true ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
)

export default PrivateRoute
