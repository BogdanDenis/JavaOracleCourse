import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

import { Header } from '../../../../components';
import * as routes from '../../../../constants';

import './login-header.sass';

export const LoginHeader = () => (
  <Header>
    <Link
      to={routes.LOGIN_ROUTE}
      className="login-link"
    >
      Login
    </Link>
  </Header>
);
