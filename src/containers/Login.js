import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent';
import type {State} from '../reducers'
import type {Dispatch} from 'react-redux';

import {
    fetchLogin,
    fetchLoginSuccess,
    fetchLoginFailure,
} from '../actions/auth'

import {
    postJson,
} from '../util'


const mapStateToProps = (state: State) => {
    return state;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onLogin: (userData: { email: string, password: string}) => {
        dispatch(fetchLogin())
        return postJson('http://localhost:8000/v1/public/users/login', userData)
            .then((res: Response) => res.json())
            .then((body: { code: number, result: { token: string }}) => {
                console.log(body);
                return dispatch(fetchLoginSuccess(body.result.token));
            })
            .catch(err => {
                console.log(err);
                return dispatch(fetchLoginFailure(err));
            })
    }
});

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

export default Login;
