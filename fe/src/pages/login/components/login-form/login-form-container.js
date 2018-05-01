import { connect } from 'react-redux';

import { LoginForm } from './login-form';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  loginUser: () => {}
};

export const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
