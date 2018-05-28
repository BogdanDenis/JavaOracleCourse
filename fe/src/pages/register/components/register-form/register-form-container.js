import { connect } from 'react-redux';

import { RegisterForm } from './register-form.jsx';
import { createDeveloper } from '../../../../actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
	createDeveloper,
};

export const RegisterFormContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(RegisterForm);
