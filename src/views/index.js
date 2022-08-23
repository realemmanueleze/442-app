import React from 'react';
import Services from 'components/Services';
import Hero from '../components/Hero';
import { info1, info2, info3 } from '../components/Info/Data';
import { Info } from '../components/Info';

function Home() {
  return (
    <>
      <Hero />
      <Info {...info1} />
      <Info {...info2} />
      <Services />
      <Info {...info3} />
    </>
  );
}

export default Home;
