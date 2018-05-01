import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

import { Logo } from '../../components';

import './header.sass';

export const Header = ({ children }) => (
  <section className="header">
    <Logo />
    <Nav bsStyle="pills">
      { children }
    </Nav>
  </section>
);
