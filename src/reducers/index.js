import { combineReducers } from 'redux'

import auth from './auth'
import ui from './ui'

const tacoApp = combineReducers({
    auth,
    ui,
});

export default tacoApp;