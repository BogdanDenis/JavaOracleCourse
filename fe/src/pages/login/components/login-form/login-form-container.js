import { connect } from 'react-redux';

import { LoginForm } from './login-form';
import { loginUser } from '../../../../actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  loginUser,
};

export const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
