import React, { Component } from 'react';

import { Logo } from '../../components';

import './header.less';

export const Header = ({ children }) => (
  <section className="header">
    <Logo />
    {children}
  </section>
);
