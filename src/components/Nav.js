import React, { useState, useContext } from 'react';
import { NavContext } from 'components/NavContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { navIsOpen, toggleNavIsOpen } = useContext(NavContext);
  const toggleMobileMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <Sidebar
        isOpen={isOpen}
        toggleMobileMenu={toggleMobileMenu}
        toggleNavIsOpen={toggleNavIsOpen}
        navIsOpen={navIsOpen}
      />
      <Navbar
        toggleMobileMenu={toggleMobileMenu}
        toggleNavIsOpen={toggleNavIsOpen}
        navIsOpen
      />
    </div>
  );
}

export default Nav;
