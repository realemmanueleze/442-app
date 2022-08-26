import React, { useState } from 'react';
import Navbar from './Navbar';
import NavContextProvider from './NavContext';
import Sidebar from './Sidebar';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContextProvider>
      <Sidebar isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
      <Navbar toggleMobileMenu={toggleMobileMenu} />
    </NavContextProvider>
  );
}

export default Nav;
