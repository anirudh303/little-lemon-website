import React from "react";
import Hero from "../../components/Hero/Hero";
import Specials from "../../components/Specials/Specials";
import Testimonials from "../../components/Testimonials/Testimonials";

function Home(children) {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
    </main>
  );
}

export default Home;
