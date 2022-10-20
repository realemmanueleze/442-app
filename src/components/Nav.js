/* eslint-disable react/jsx-no-bind */
import React, { useState, useContext, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { NavContext } from './NavContext';

function Nav() {
  const { setNavIsOpen, toggleNavIsOpen, navIsOpen } = useContext(NavContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    window.onpopstate = () => {
      if (window.location.pathname === '/signin') {
        setNavIsOpen(false);
      } else setNavIsOpen(true);
    };
  }, [window.onpopstate]);

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
