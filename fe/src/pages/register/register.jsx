import React, { Component } from 'react';

import {
  RegisterHeader,
  RegisterFormContainer,
} from './components';

import './register.sass';

export class Register extends Component {
  render() {
    return (
      <section className="register-page">
        <RegisterHeader />
        <RegisterFormContainer />
      </section>
    );
  }
}
