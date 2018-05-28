import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  FormControl,
  ControlLabel,
  FormGroup,
} from 'react-bootstrap';

export class RegisterForm extends Component {
  static get propTypes() {
    return {
      createDeveloper: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
			name: '',
      email: '',
			password: '',
		};

		this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
  }

	onNameChange(e) {
		const name = e.target.value;

		this.setState({ name });
	}

  onEmailChange(e) {
    const email = e.target.value;
    this.setState({ email });
  }

  onPasswordChange(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  onRegisterClick() {
    const {
			name,
      email,
      password,
    } = this.state;

    this.props.createDeveloper({
			name,
			email,
			password,
		});
  }
  
  render() {
    const {
			name,
      email,
      password,
    } = this.state;

    return (
      <form className="register-form">
				<FormGroup
          controlId="name"
        >
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={this.onNameChange}
          />
        </FormGroup>
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
          onClick={this.onRegisterClick}
        >Register</Button>
      </form>
    );
  }
}