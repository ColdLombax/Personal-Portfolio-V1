import React from 'react';

import carret from '../../assets/illustrations/arrow.svg';

function Footer() {
  return (
    <footer className="w-full h-16 absolute bottom-0 bg-purple-dark flex justify-end items-center">
      <ul className="flex text-white font-bold">
        <li>
          <img src={carret} alt="" className="w-4/6" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
