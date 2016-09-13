// @flow
import { handleActions } from 'redux-actions';

const startingStatus = { isLogged: false, user: {} };
export default handleActions({
    LOGIN: (state, action) => {
        return { ...state, isLogged: true, user: action.payload }
    },
    LOGOUT: (state, action) => {
        return { ...state, isLogged: false, user: {} }
    },
    unauthenticated: (state, action) => {
        return { ...state, showUnauthenticatedMessage: true }
    }

}, startingStatus);