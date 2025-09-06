import React from 'react';
import Layout from '../../components/Layout';
import { BsYoutube, BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { FaUsers, FaCog, FaRocket, FaLeaf } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const GlassCard = ({ children, className = "", gradient = false }) => (
  <motion.div
    className={`relative overflow-hidden rounded-3xl p-10 ${
      gradient 
        ? 'bg-gradient-to-br from-lime-500/15 via-green-600/10 to-emerald-700/15' 
        : 'bg-black/30'
    } backdrop-blur-xl border border-lime-400/30 shadow-2xl shadow-lime-600/20 hover:border-lime-400/50 transition-all duration-300 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400/10 to-green-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm -z-10"></div>
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const StatCard = ({ icon: Icon, number, label, color = "text-lime-400" }) => (
  <div className="bg-black/40 backdrop-blur-md border border-lime-400/20 rounded-2xl p-6 text-center hover:border-lime-400/40 transition-all duration-300">
    <Icon className={`${color} text-3xl mx-auto mb-4`} />
    <div className="text-3xl font-bold text-white mb-2">{number}</div>
    <div className="text-sm text-gray-300 uppercase tracking-wider">{label}</div>
  </div>
);

const Team2 = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-emerald-900/40 to-green-950 text-white overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-lime-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-lime-400/6 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-md border border-lime-400/30 rounded-full px-6 py-3 mb-8">
              <HiSparkles className="text-lime-400 text-lg" />
              <span className="text-lime-400 font-medium">Meet the Team</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              Team{' '}
              <span className="bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent">
                Daksh
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of electric mobility through innovation, passion, and relentless pursuit of excellence
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <StatCard icon={FaUsers} number="50+" label="Team Members" />
              <StatCard icon={FaCog} number="15+" label="Years Experience" color="text-green-400" />
              <StatCard icon={FaRocket} number="25+" label="Projects Done" color="text-blue-400" />
              <StatCard icon={FaLeaf} number="100%" label="Sustainable" color="text-emerald-400" />
            </div>
          </motion.div>

          {/* What We Do Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <GlassCard gradient className="lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <FaCog className="text-lime-400 text-3xl" />
                <h2 className="text-4xl font-black text-lime-300">What We Do</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-200">
                  We engineer cutting-edge electric powertrains for off-road vehicles, specializing in e-BAJA competitions. Our mission is creating high-performance machines that seamlessly blend power, sustainability, and rugged capability.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-200">
                  From initial concept to championship victories, we prioritize innovative simplicity without compromising performance. Every component is meticulously crafted to contribute to a cleaner, more sustainable future of mobility.
                </p>

                {/* YouTube Integration */}
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/5 border border-red-400/20 rounded-2xl p-6 mt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <BsYoutube className="text-red-500 text-3xl" />
                    <div>
                      <h3 className="text-lg font-bold text-white">Follow Our Journey</h3>
                      <p className="text-sm text-gray-300">Watch our latest innovations and competitions</p>
                    </div>
                  </div>
                  
                  <a 
                    href="https://www.youtube.com/@teamdaksh9836" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <BsYoutube size={20} />
                    Subscribe Now
                    <BsArrowRight size={16} />
                  </a>
                </div>
              </div>
            </GlassCard>
            
            <motion.div
              className="lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/Team/img1.webp"
                alt="Team Daksh Engineering Excellence"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl shadow-lime-800/50 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Who We Are Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/Team/img2.webp"
                alt="Team Daksh Innovation"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl shadow-lime-800/50 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            
            <GlassCard gradient>
              <div className="flex items-center gap-4 mb-8">
                <FaUsers className="text-green-400 text-3xl" />
                <h2 className="text-4xl font-black text-green-300">Who We Are</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-200">
                  We are a collective of passionate, hardworking students who discovered our calling in off-road engineering. From curious enthusiasts to skilled predators of the track, we've evolved into a formidable force in sustainable mobility.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-200">
                  Our philosophy is simple yet powerful: 
                  <span className="text-lime-300 font-bold"> Design with purpose, Build with precision, Compete with honor.</span>
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  {['Innovative', 'Sustainable', 'Competitive', 'United'].map((trait, index) => (
                    <span key={index} className="bg-lime-500/20 text-lime-300 px-4 py-2 rounded-full text-sm font-medium">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Our Team Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <GlassCard gradient className="lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <FaRocket className="text-blue-400 text-3xl" />
                <h2 className="text-4xl font-black text-blue-300">Our Evolution</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-200">
                  From mastering petrol-powered off-road beasts, our exceptional team has embraced the electrifying transformation toward sustainable mobility. We're not just adapting—we're leading the revolution.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-200">
                  By seamlessly merging our legacy of rugged performance with cutting-edge electric technology, we're creating vehicles that don't just match their predecessors—they surpass them in every metric that matters.
                </p>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/5 border border-blue-400/20 rounded-2xl p-6 mt-8">
                  <h3 className="text-lg font-bold text-blue-300 mb-2">Our Mission</h3>
                  <p className="text-gray-200">
                    Pioneering sustainable off-road excellence while maintaining uncompromising performance standards.
                  </p>
                </div>
              </div>
            </GlassCard>
            
            <motion.div
              className="lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/Team/img3.webp"
                alt="Team Daksh Future"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl shadow-lime-800/50 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Call to Action Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard gradient className="max-w-4xl mx-auto">
              <HiSparkles className="text-lime-400 text-4xl mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Join Our Journey?
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Witness how we're revolutionizing electric off-road vehicles and engineering the future of sustainable high-performance mobility.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="https://www.youtube.com/@teamdaksh9836"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-red-500/30 transition-all duration-300 hover:scale-105"
                >
                  <BsYoutube size={24} />
                  Watch Our Story
                </a>

                <a 
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-lime-600 hover:bg-lime-700 text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-lime-500/30 transition-all duration-300 hover:scale-105"
                >
                  Join Our Team
                  <BsArrowRight size={20} />
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Team2;
