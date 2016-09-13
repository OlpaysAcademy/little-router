// @flow
import { handleActions } from 'redux-actions';

const startingStatus = { showUnauthenticatedMessage: false };
export default handleActions({
    SHOW_UNAUTH_MESSAGE: (state, action) => {
        return { ...state, showUnauthenticatedMessage: true }
    },
    HIDE_UNAUTH_MESSAGE: (state, action) => {
        return { ...state, showUnauthenticatedMessage: false }
    },
}, startingStatus);