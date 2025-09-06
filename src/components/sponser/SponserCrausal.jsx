import React from 'react';
import SponserCard from './SponserCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHandshake, FaRocket, FaHeart } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const SponsorCarousel = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-emerald-900/40 to-green-950 py-20 px-6 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-green-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-lime-400/6 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Premium Badge */}
          <div className="inline-flex mt-10 items-center gap-3 bg-gradient-to-r from-lime-500/20 to-green-600/20 backdrop-blur-md border border-lime-400/40 rounded-full px-8 py-4 mb-8 shadow-lg shadow-lime-500/30">
            <FaHandshake className="text-lime-400 text-xl" />
            <span className="text-lime-400 font-bold text-lg tracking-wide">Our Partners</span>
            <HiSparkles className="text-lime-400 text-xl animate-pulse" />
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              Sponsors
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Meet the visionary organizations and individuals who fuel our innovation and support our journey towards sustainable mobility excellence.
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-green-500 mx-auto rounded-full shadow-lg shadow-lime-500/50"></div>
        </motion.div>

        {/* Sponsor Cards Container */}
        <motion.div
          className="bg-gradient-to-br from-lime-500/10 to-green-600/10 backdrop-blur-xl border border-lime-400/30 rounded-3xl p-8 mb-16 shadow-2xl shadow-lime-700/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SponserCard />
        </motion.div>

        {/* Inspirational Quote Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Quote Container */}
            <div className="bg-gradient-to-br from-black/40 to-emerald-900/30 backdrop-blur-lg border border-lime-400/20 rounded-3xl p-12 shadow-xl shadow-lime-600/20">
              {/* Quote Mark */}
              <div className="text-6xl text-lime-400/20 font-serif mb-4">"</div>
              
              {/* Quote Text */}
              <blockquote className="text-2xl md:text-3xl font-bold text-lime-300 leading-relaxed mb-8 italic">
                Dreams and aspirations are not easily obtained, but one of the hardest things to do is to keep chasing. Being a Predator, we will strive for success, and we want you to support us while carrying this responsibility.
              </blockquote>
              
              {/* Call to Action in Quote */}
              <p className="text-xl text-white font-semibold">
                <span className="text-lime-400">Contribute to a cause</span> — Be a Predator with us.
              </p>
              
              {/* Quote Mark Closing */}
              <div className="text-6xl text-lime-400/20 font-serif text-right mt-4">"</div>
            </div>
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            {
              icon: FaRocket,
              title: "Innovation Partnership",
              description: "Join us in pioneering the future of sustainable mobility and cutting-edge engineering solutions."
            },
            {
              icon: FaHandshake,
              title: "Brand Recognition",
              description: "Gain visibility through our competitions, events, and digital platforms reaching thousands globally."
            },
            {
              icon: FaHeart,
              title: "Community Impact",
              description: "Support the next generation of engineers and contribute to sustainable technology advancement."
            }
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-md border border-lime-400/20 rounded-2xl p-8 text-center hover:border-lime-400/40 transition-all duration-300 hover:scale-105"
            >
              <benefit.icon className="text-lime-400 text-4xl mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to join our mission and become part of something extraordinary?
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/sponser"
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-400 hover:to-green-500 px-10 py-5 rounded-2xl text-black font-bold text-xl shadow-2xl shadow-lime-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Become Our Partner</span>
              <FaHandshake className="relative z-10 group-hover:rotate-12 transition-transform duration-300" size={24} />
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-md border-2 border-lime-400/40 hover:border-lime-400/60 px-8 py-5 rounded-2xl text-white font-bold text-xl transition-all duration-300 hover:bg-lime-500/10"
            >
              Contact Us
              <FaRocket size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorCarousel;
