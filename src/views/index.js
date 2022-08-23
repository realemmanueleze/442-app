import React, { useState } from 'react';
import Services from 'components/Services';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { info1, info2, info3 } from '../components/Info/Data';

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
      <Info {...info1} />
      <Info {...info2} />
      <Services />
      <Info {...info3} />
    </>
  );
}

export default Home;
