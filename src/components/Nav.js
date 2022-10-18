/* eslint-disable react/jsx-no-bind */
import React, { useState, useContext } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { NavContext } from './NavContext';

function Nav() {
  const { toggleNavIsOpen, navIsOpen } = useContext(NavContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
    console.log('clicked');
  };

  return (
    <>
      <Navbar
        isOpen={isOpen}
        toggleMobileMenu={toggleMobileMenu}
        navIsOpen={navIsOpen}
        toggleNavIsOpen={toggleNavIsOpen}
      />

      <Sidebar
        isOpen={isOpen}
        toggleMobileMenu={toggleMobileMenu}
        navIsOpen={navIsOpen}
        toggleNavIsOpen={toggleNavIsOpen}
      />
    </>
  );
}

export default Nav;
