import React from 'react';
import PropTypes from 'prop-types';

function NavItem({ title }) {
  return (
    <li>
      <a href={`#${title}`}>{title.toUpperCase()}</a>
    </li>
  );
}

export default NavItem;

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
};
