import { combineReducers } from 'redux'

import auth from './auth'
import ui from './ui'

export type State = {
    auth: Auth,
    ui: UI
}

const tacoApp = combineReducers({
    auth,
    ui,
});

export default tacoApp;
