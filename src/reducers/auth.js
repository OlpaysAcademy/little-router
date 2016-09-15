// @flow
import { handleActions } from 'redux-actions';
import type { Action } from '../actions/index';

export type Auth = {
    isLogged: boolean,
    user: Object,
    token: string
}

const startingStatus: Auth = { isLogged: false, user: {}, token: '' };
export default handleActions({
    FETCH_LOGIN_SUCCESS: (state: Auth, action: Action<string>) => {
        // return modifyAuth(state, true, action.payload);
        return { ...state, isLogged: true, token: action.payload }
    },
    LOGOUT: (state, action) => {
        // return { ...state, isLogged: false, token: '' }
        return modifyAuth(state, false, '');
    }
}, startingStatus);


function modifyAuth(state, isLogged, token) {
    return { ...state, isLogged, token }
}