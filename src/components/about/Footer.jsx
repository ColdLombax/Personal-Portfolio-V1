/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import arrow from '../../assets/illustrations/arrow.svg';

function Footer({ setContent }) {
  const clickHandler = () => {
    setContent((prevState) => {
      if (prevState === 3) {
        return 1;
      }
      return prevState + 1;
    });
  };
  return (
    <footer className="
    bg-purple-dark absolute bottom-0 right-0 w-3/12 z-0
    md:w-5/12
    xl:w-7/12
    "
    >
      <ul className="flex justify-end gap-10 p-2">
        <img src={arrow} alt="" className="w-10" onClick={clickHandler} onKeyPress={clickHandler} role="navigation" />
      </ul>
    </footer>
  );
}

Footer.propTypes = {
  setContent: PropTypes.func.isRequired,
};

export default Footer;
