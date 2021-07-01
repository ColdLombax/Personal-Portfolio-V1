import React from 'react';

import lostOnlineSvg from '../../assets/illustrations/lost-online.svg';

function Header() {
  return (
    <div>
      <img
        src={lostOnlineSvg}
        alt=""
        className="
        w-3/4 ml-auto
        md:w-3/5
        lg:w-2/6"
      />
    </div>
  );
}

export default Header;
