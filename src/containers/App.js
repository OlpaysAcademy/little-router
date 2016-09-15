import { connect } from 'react-redux'

import { logout } from '../actions/auth'
import AppComponent from '../components/AppComponent';


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(logout()),
});

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default App;
