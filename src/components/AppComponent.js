// @flow
import React, { PropTypes } from 'react';
import { Link, Fragment } from 'redux-little-router';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress';

import Login from '../containers/Login'

import type { Router } from '../routes';
import type { UI } from '../reducers/ui';

const paperStyle = {
    margin: 20,
    padding: 15,
};

const buttonStyle = {
    margin: 12
}

const App = ({ router, ui, onLogout }: { router: Router, ui: UI, onLogout: Function }) => {
    const isLoading = ui.loading && !ui.error;
    const isError = ui.error;
    const isOk = !ui.error && !ui.loading;
    console.log(router);
    return (
        <div>
            <AppBar
                title={router.result.title}
                />
            <Link href='/auth'>
                <RaisedButton style={buttonStyle} primary={true} label="Auth" />
            </Link>
            <Link href='/app'>
                <RaisedButton style={buttonStyle} label="App" />
            </Link>
            {isOk &&
                <div>
                    <Snackbar
                        open={ui.showUnauthenticatedMessage}
                        autoHideDuration={4000}
                        message="No session"
                        />
                    <Paper style={paperStyle} zDepth={1}>
                        <Fragment forRoute='/auth'>
                            <Login />
                        </Fragment>
                        <Fragment key="/app" forRoute='/app'>
                            <div>
                                App!!!
                                <RaisedButton onClick={onLogout} label="Logout" secondary={true} />
                            </div>
                        </Fragment>
                    </Paper>
                </div>
            }
            {isLoading &&
                <CircularProgress />
            }
            {isError &&
                <p>Error</p>
            }
        </div>
    );
};

App.propTypes = {
    router: PropTypes.object,
};

export default App;
