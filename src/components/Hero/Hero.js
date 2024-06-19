import React from "react";
import HeroImage from "../../assets/images/hero-image.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="flex flex-row bg-[#495e57] w-full bg-cover bg-center h-96 bg-op mt-8 px-8 py-4 items-center md:justify-between md:px-20 overflow-hidden"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className=" space-y-3">
        <h1 className="text-6xl font-bold text-[#FFF8DC] mb-4 ">
          Little Lemon
        </h1>
        <h2 className="text-xl font-bold text-white mb-4">Chicago</h2>
        <p className="mt-6 font-medium  text-[#FFF8DC] text-2xl w-2/3 ">
          We are a family-owned Mediterranean restaurant, dedicated to
          traditional recipes served with a modern twist.
        </p>
        <Link to="/reservations">
          <button className="mt-4 text-2xl bg-[#efe6c1] text-slate-600 font-bold  px-6 py-2 rounded-full hover:bg-[#495e57] hover:text-[#fdfae9] transition-all duration-300">
            Reserve a Table
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
