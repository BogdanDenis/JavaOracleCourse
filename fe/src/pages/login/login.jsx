import React, { Component } from 'react';

import {
  LoginHeader,
  LoginFormContainer,
} from './components';

import './login.sass';

export class Login extends Component {
  render() {
    return (
      <section className="login-page">
        <LoginHeader />
        <LoginFormContainer />
      </section>
    );
  }
}
