import React from 'react';

import NavItem from './NavItem';

function Navbar() {
  const navItems = [
    { title: 'about' },
    { title: 'projects' },
    { title: 'experience' },
  ];
  const navElements = navItems.map((item) => <NavItem key={item.title} title={item.title} />);
  return (
    <nav className="text-white text-lg font-bold bg-purple-dark w-full p-5">
      <ul className="
      flex justify-evenly gap-4
      lg:justify-start lg:gap-60 lg:ml-5"
      >
        {navElements}
      </ul>
    </nav>
  );
}

export default Navbar;
