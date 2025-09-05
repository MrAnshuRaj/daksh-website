import React from 'react';
import SponserCard from "./SponserCard";
import { Link } from "react-router-dom";

const SponsorCrausal = () => {
  return (
    <section
      className="w-full px-0 py-8 flex flex-col justify-center"
      style={{
        backgroundImage: "url('/sponser.webp')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full bg-black/90 backdrop-blur-lg p-6 flex flex-col items-center text-center rounded-t-none rounded-b-none">
        <h2 className="w-full text-4xl sm:text-5xl font-bold text-white mb-8 mt-8 px-0">
          Our <span className="text-lime-500">Sponsors</span>
        </h2>
        <div className="w-full flex-grow px-0">
          <SponserCard />
        </div>
        <p className="text-lime-400 font-semibold text-xl sm:text-3xl mt-16 mb-2 w-full px-0 text-center max-w-4xl mx-auto">
          "Dreams and aspirations are not easily obtained, but one of the hardest things to do is to keep chasing.
          Being a Predator, we will strive for success, and we want you to support us while carrying this responsibility.
          Contribute to a cause, be a Predator with us."
        </p>
        <Link
          to="/sponser"
          className="mt-8 mb-12 inline-block border-2 border-lime-600 px-7 py-3 rounded-full font-semibold text-white hover:bg-lime-600 hover:border-lime-400 transition duration-300"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default SponsorCrausal;
