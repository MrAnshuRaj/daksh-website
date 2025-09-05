import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaTrophy, FaUsers, FaCog } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const HeroSection = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-emerald-900/60 to-green-950 overflow-hidden">
      
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-lime-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md border border-lime-400/30 rounded-full px-6 py-3">
                <HiSparkles className="text-lime-400 text-lg" />
                <span className="text-lime-400 font-medium">Award-Winning Team</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                Engineering the
                <span className="block bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent">
                  Future of Mobility
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Team Daksh pioneers electric all-terrain vehicle innovation at NIT Jamshedpur, 
                combining cutting-edge engineering with sustainable technology.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-400 hover:to-green-500 rounded-2xl px-8 py-4 font-bold text-black shadow-lg transition-all duration-300 flex items-center gap-3"
              >
                Explore Our Story
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="bg-black/30 backdrop-blur-md border border-lime-400/40 hover:border-lime-400/60 rounded-2xl px-8 py-4 font-semibold text-white transition-all duration-300 flex items-center gap-3">
                <FaPlay className="text-lime-400" />
                Watch Journey
              </button>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="pt-8">
              <p className="text-gray-400 mb-4">Get in touch with us</p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="mailto:daksh.nitjsr@nitjsr.ac.in"
                  className="text-lime-400 hover:text-lime-300 transition-colors font-medium"
                >
                  daksh.nitjsr@nitjsr.ac.in
                </a>
                <a
                  href="tel:+918210258224"
                  className="text-lime-400 hover:text-lime-300 transition-colors font-medium"
                >
                  +91 8210258224
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Achievement */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            {/* Stats Grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {[
                { icon: FaTrophy, number: '15+', label: 'Years Excellence', color: 'text-yellow-400' },
                { icon: FaUsers, number: '100+', label: 'Team Members', color: 'text-lime-400' },
                { icon: FaCog, number: '50+', label: 'Projects Done', color: 'text-green-400' },
                { icon: HiSparkles, number: '25+', label: 'Awards Won', color: 'text-lime-300' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-lime-500/10 to-green-600/10 backdrop-blur-md border border-lime-400/20 rounded-2xl p-6 text-center hover:border-lime-400/40 transition-all duration-300"
                >
                  <stat.icon className={`${stat.color} text-2xl mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Achievement Highlight */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-br from-lime-500/15 to-green-600/15 backdrop-blur-md border border-lime-400/30 rounded-3xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-3">
                    <FaTrophy className="text-2xl text-yellow-900" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-lime-300 mb-3">Latest Achievement</h3>
                <p className="text-gray-300 text-lg mb-6">
                  <strong>1st Place</strong> at BAJA SAE International 2024
                  <br />
                  Electric Vehicle Category
                </p>
                <div className="flex justify-center gap-3">
                  <span className="bg-lime-500/20 text-lime-300 px-4 py-2 rounded-full text-sm font-medium">
                    Innovation Award
                  </span>
                  <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                    Sustainability Champion
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default HeroSection;
