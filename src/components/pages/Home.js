import React from 'react';
import Hero from '../../components/Hero/Hero';
import Specials from '../../components/Specials/Specials';
import Testimonials from '../../components/Testimonials/Testimonials';
import About from './About';

function Home(children) {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Home;
