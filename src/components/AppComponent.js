import React, { PropTypes } from 'react';
import { Link, Fragment } from 'redux-little-router';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

const paperStyle = {
    margin: 20,
    padding: 15,
};

const buttonStyle = {
    margin: 12
}

const App = ({ router, ui }) => {
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
            <Snackbar
                open={ui.showUnauthenticatedMessage}
                autoHideDuration={4000}
                message="No session"
                />
            <Paper style={paperStyle} zDepth={1}>
                <Fragment forRoute='/auth'>
                    <div>
                        Auth
                    </div>
                </Fragment>
                <Fragment key="/app" forRoute='/app'>
                    <div>
                        App!!!
                    </div>
                </Fragment>
            </Paper>
        </div>
    );
};

App.propTypes = {
    router: PropTypes.object,
};

export default App;