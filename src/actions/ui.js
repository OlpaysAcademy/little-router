//@flow
import { createActions } from 'redux-actions';

export const {
    showUnauthMessage,
    hideUnauthMessage,
} = createActions({}, 'SHOW_UNAUTH_MESSAGE', 'HIDE_UNAUTH_MESSAGE');