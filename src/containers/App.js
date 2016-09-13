import { connect } from 'react-redux'

import { login, logout } from '../actions/auth'
import AppComponent from '../components/AppComponent';


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => ({});

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default App;