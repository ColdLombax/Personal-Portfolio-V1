import React from 'react';

import lostOnlineSvg from '../../assets/illustrations/lost-online.svg';

function Header() {
  return (
    <header>
      <img
        src={lostOnlineSvg}
        alt=""
        className="
        w-3/4 ml-auto relative top-16
        md:w-3/6
        lg:w-2/6 z-0"
      />
    </header>
  );
}

export default Header;
