import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs'; // Example social

const About = () => {
  return (
    <section className="flex min-h-[75vh] w-full">

      {/* Left: Content */}
      <div className="flex flex-col justify-center items-start w-1/2 px-12 py-16"
        style={{ background: "linear-gradient(135deg, #173d23 80%, #163221 100%)" }}
      >
        {/* Social Icon Row (optional) */}
        <div className="flex mb-6">
          <a href="https://www.instagram.com/team.daksh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-500 bg-white/10 border border-lime-400 rounded-lg p-2 mr-2 hover:bg-lime-100 hover:text-lime-600 transition shadow-lg"
          >
            <BsInstagram size={28} />
          </a>
        </div>
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-lime-400 mb-4">
          About <span className="text-white">Us</span>
        </h1>
        {/* Subheadline */}
        <p className="uppercase font-semibold text-base text-gray-300 mb-5 tracking-wide">
          Who we are?
        </p>
        {/* Main Copy */}
        <p className="text-lg text-gray-200 leading-relaxed mb-7 max-w-lg">
          Team Daksh is the official technical team of NIT Jamshedpur, designing and fabricating ATVs.
          Proudly the first official club at NIT Jamshedpur, started in 2009 by students passionate about exploring ATV mechanisms.
          Consistently participating in BAJA SAE and holding top positions under the guidance of Dr. Sanjay and Mr. Rupak Kumar.
          From roaring engines to the electric pulse of progress, our team now leads with electrifying power and innovation.
        </p>
        {/* Primary CTA */}
        <Link to="/about"
          className="bg-lime-600 hover:bg-lime-700 text-white font-bold px-8 py-3 mt-2 rounded-full shadow-xl transition"
        >
          Learn More
        </Link>
      </div>

      {/* Right: Photo */}
      <div
        className="w-1/2 min-h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/about.webp')"
        }}
      ></div>
    </section>
  );
};

export default About;
