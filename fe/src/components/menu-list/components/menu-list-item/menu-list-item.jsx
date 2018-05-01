import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './menu-list-item.sass';

const MenuListItem = ({ label, url }) => (
  <Link className="menu-list__wrapper__item" to={url}>
    <p className="menu-list__wrapper__item__title">{label}</p>
  </Link>
);

MenuListItem.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export { MenuListItem };
