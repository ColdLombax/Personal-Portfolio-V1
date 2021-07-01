import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavItem({ title }) {
  return (
    <li className="hover:text-blue-100">
      <NavLink
        to={`/${title}`}
        activeClassName="active"
      >
        {title.toUpperCase()}
      </NavLink>
    </li>
  );
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavItem;
