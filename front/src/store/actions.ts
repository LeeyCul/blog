import { Dispatch } from 'redux'

export const ACTION_SET_LOADING = 'SET_LOADING'
export const ACTION_SET_TO = 'SET_TO'
export const ACTION_SET_FROM = 'SET_FROM'

export const actions = {
    setTo() {
        return (dispatch: Dispatch, getState: any) => {
            const { to } = getState()
            dispatch({
                type: ACTION_SET_TO,
                payload: !to
            })
        }
    },
    setFrom(from: string) {
        return {
            type: ACTION_SET_FROM,
            payload: from
        }
    },
    setLoading(load: boolean) {
        return {
            type: ACTION_SET_LOADING,
            payload: load
        }
    }
}
