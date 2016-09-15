// @flow
import { createActions } from 'redux-actions';

export const {
    fetchLogin,
    fetchLoginSuccess,
    fetchLoginFailure,
    logout,
} = createActions({}, 'FETCH_LOGIN', 'FETCH_LOGIN_SUCCESS', 'FETCH_LOGIN_FAILURE', 'LOGOUT');
