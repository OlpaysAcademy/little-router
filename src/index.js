import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { initializeCurrentLocation } from 'redux-little-router';
import {
    createStoreWithRouter,
    RouterProvider
} from 'redux-little-router'

import reducers from './reducers';
import routes from './routes';
import App from './containers/App';

import {showUnauthMessage} from './actions/ui';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(
    reducers,
    {},
    compose(
        createStoreWithRouter({
            routes,
            pathname: window.location.pathname
        }),
        window.devToolsExtension ?
            window.devToolsExtension() : f => f
    )
);

store.subscribe(() => {
    const { auth, router } = store.getState();
    if (!auth.isLogged && !/^\/auth/.test(router.pathname)) {
        store.dispatch({ type: 'ROUTER_PUSH', payload: '/auth' })
        store.dispatch(showUnauthMessage())
    }
    if (auth.isLogged && /^\/auth/.test(router.pathname)) {
        store.dispatch({ type: 'ROUTER_PUSH', payload: '/app' })
    }
})

const initialLocation = store.getState().router;
if (initialLocation) {
    store.dispatch(initializeCurrentLocation(initialLocation));
}

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <RouterProvider store={store}>
                <App />
            </RouterProvider>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
