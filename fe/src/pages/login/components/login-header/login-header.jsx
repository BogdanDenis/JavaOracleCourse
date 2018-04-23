import React from 'react';

import {
  Header,
  MenuListItem,
} from '../../../../components';
import * as routes from '../../../../constants';

export const LoginHeader = () => (
  <Header>
    <MenuListItem
      label="Login"
      url={routes.LOGIN_ROUTE}
    />
  </Header>
);
