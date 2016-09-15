import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import R from 'ramda';

export default class LoginComponent extends Component {
    constructor(props: Object) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleLogin(event: Event) {
        event.preventDefault();
        this.props.onLogin(this.state);
    }

    handleChange: (property: string, event: Event) => void = R.curry((property, event) => {
        this.setState({ [property]: event.target.value });
    })

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <TextField
                    hintText="E-Mail"
                    onChange={this.handleChange('email')}
                    />
                <br />
                <br />
                <TextField
                    type='password'
                    hintText="Password"
                    onChange={this.handleChange('password')}
                    />
                <br />
                <RaisedButton label="Login" primary={true} type="submit" />
            </form>
        )
    }
}
