// @flow
import { handleActions } from 'redux-actions';

export type UI = {
    showUnauthenticatedMessage: boolean,
    loading: boolean,
    error: boolean
}

const startingStatus = { showUnauthenticatedMessage: false, loading: false };
export default handleActions({
    SHOW_UNAUTH_MESSAGE: (state, action) => {
        return { ...state, showUnauthenticatedMessage: true }
    },
    HIDE_UNAUTH_MESSAGE: (state, action) => {
        return { ...state, showUnauthenticatedMessage: false }
    },
    FETCH_LOGIN: (state, action) => {
        return { ...state, loading: true }
    },
    FETCH_LOGIN_SUCCESS: (state, action) => {
        return { ...state, loading: false }
    },
    FETCH_LOGIN_FAILURE: (state, action) => {
        return { ...state, error: true, loading: false }
    },
}, startingStatus);
