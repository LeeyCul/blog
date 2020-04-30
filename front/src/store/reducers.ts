import { ACTION_SET_TO, ACTION_SET_FROM, ACTION_SET_LOADING } from './actions'
import { AnyAction } from 'redux'

const initalState: Stores.StoreState = {
    to: false,
    from: '北京',
    loading: false
}

export default {
    to(state = initalState.to, action: AnyAction) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_TO:
                return payload
            default:
        }
        return state
    },
    from(state = initalState.from, action: AnyAction) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_FROM:
                return payload
            default:
        }
        return state
    },
    loading(state = initalState.loading, action: AnyAction) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_LOADING:
                return payload
            default:
        }
        return state
    }
}
