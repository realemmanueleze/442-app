import React, { useState } from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
      <Navbar toggleMobileMenu={toggleMobileMenu} />
      <Hero />
      <Info />
    </>
  );
}

export default Home;
