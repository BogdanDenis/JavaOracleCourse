import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './menu-list.sass';

export class MenuList extends Component {
  static get propTypes() {
    return {
      title: PropTypes.string.isRequired,
    };
  }

  render() {
    const {
      title,
      children,
    } = this.props;

    return (
      <section className="menu-list">
        <h2 className="menu-list__title">{title}</h2>
        <section className="menu-list__wrapper">
          {children}
        </section>
      </section>
    );
  }
}
