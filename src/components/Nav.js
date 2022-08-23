import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
      <Navbar toggleMobileMenu={toggleMobileMenu} />
    </>
  );
}

export default Nav;
