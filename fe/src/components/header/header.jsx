import React, { Component } from 'react';

import './header.less';

export const Header = ({ children }) => (
  <section className="header">
    {children}
  </section>
);
