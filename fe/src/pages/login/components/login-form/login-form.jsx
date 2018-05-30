import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  FormControl,
  ControlLabel,
  FormGroup,
} from 'react-bootstrap';

import { REGISTER_ROUTE } from '../../../../constants/routes';

import './login-form.sass';

export class LoginForm extends Component {
  static get propTypes() {
    return {
      loginUser: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onEmailChange(e) {
    const email = e.target.value;
    this.setState({ email });
  }

  onPasswordChange(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  onLoginClick() {
    const {
      email,
      password,
    } = this.state;

    this.props.loginUser(email, password);
  }
  
  render() {
    const {
      email,
      password,
    } = this.state;

    return (
      <form className="login-form">
        <FormGroup
          controlId="email"
        >
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={this.onEmailChange}
          />
        </FormGroup>
        <FormGroup
          controlId="password"
        >
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={this.onPasswordChange}
          />
        </FormGroup>
        <Button
          bsStyle="primary"
          onClick={this.onLoginClick}
        >Login</Button>
        <span className="login-form__links-separator">or</span>
        <Link
          to={REGISTER_ROUTE}
          className="register-link"
        >
          Register
        </Link>
      </form>
    );
  }
}