import React from 'react';

import arrow from '../../assets/illustrations/arrow.svg';

function Footer() {
  return (
    <footer className="
    bg-purple-dark absolute bottom-0 right-0 w-3/12 z-0
    md:w-5/12
    xl:w-7/12
    "
    >
      <ul className="flex justify-end gap-10 p-2">
        <img src={arrow} alt="" className="w-10" />
      </ul>
    </footer>
  );
}

export default Footer;
