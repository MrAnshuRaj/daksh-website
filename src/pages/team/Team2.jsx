import React from 'react';
import Layout from '../../components/Layout';
import { BsYoutube } from 'react-icons/bs';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    className={`bg-black/30 backdrop-blur-lg border border-lime-600/40 rounded-3xl shadow-lg shadow-lime-700/40 p-8 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const Team2 = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet <span className="text-lime-500">Team Daksh</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-center text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Driving the future of electric mobility through innovation and passion
          </motion.p>
        </div>

        {/* What We Do Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <GlassCard>
              <h3 className="text-lime-500 text-3xl md:text-4xl mb-6 font-bold">WHAT WE DO</h3>
              <p className="text-lg leading-relaxed text-gray-200 mb-8">
                We design powerful electric engines for off-road vehicles, focusing on events like e-Baja competitions. Our goal is to create machines that balance strength, eco-friendliness, and off-road capability.
              </p>
              <p className="text-lg leading-relaxed text-gray-200 mb-8">
                From the drawing board to the rugged terrains of e-Baja competitions, we prioritize simplicity without compromising performance. Our dedicated team channels its passion into every detail, ensuring our electric off-road vehicles contribute to a cleaner, more sustainable future.
              </p>
              <div className="flex items-center justify-center gap-4 p-4 bg-lime-600/20 rounded-2xl">
                <BsYoutube size={32} className="text-red-500" />
                <div>
                  <p className="text-sm text-gray-300">Explore more on</p>
                  <a 
                    href="https://www.youtube.com/@teamdaksh9836" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg font-semibold text-white hover:text-lime-400 transition-colors"
                  >
                    Team Daksh YouTube
                  </a>
                </div>
              </div>
            </GlassCard>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/Team/img1.webp"
                alt="What We Do"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl shadow-lime-800/50"
              />
            </motion.div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:order-1"
            >
              <img
                src="/Team/img2.webp"
                alt="Who We Are"
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl shadow-lime-800/50"
              />
            </motion.div>
            
            <GlassCard className="md:order-2">
              <h3 className="text-lime-500 text-3xl md:text-4xl mb-6 font-bold">WHO WE ARE</h3>
              <p className="text-lg leading-relaxed text-gray-200">
                We are a group of highly passionate, hardworking and enthusiastic students who found their interest in off-roading and rose towards becoming a predator. Let's meet the engineers who found their place in today's complicated and fast-moving world and do what they love i.e. <span className="text-lime-400 font-semibold">Design, Build and Compete.</span>
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <GlassCard>
              <h1 className="text-lime-500 text-3xl md:text-4xl mb-6 font-bold">OUR TEAM</h1>
              <p className="text-lg leading-relaxed text-gray-200 mb-6">
                Having carved a niche in crafting robust, petrol-powered off-road marvels, our adept team is now poised for an exhilarating transformation towards electric off-road processes.
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                Seamlessly blending our heritage of rugged performance with an unwavering dedication to sustainability, we ardently champion the avant-garde in electric mobility. Unified by a collective vision, our diverse and skilled cadre is resolutely committed to pushing the boundaries, ensuring that our electric off-road vehicles not only emulate but surpass the zenith of their petrol-powered counterparts.
              </p>
            </GlassCard>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/Team/img3.webp"
                alt="Our Team"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl shadow-lime-800/50"
              />
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <GlassCard>
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Journey?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Discover how we're revolutionizing electric off-road vehicles and shaping the future of sustainable mobility.
            </p>
            <a 
              href="https://www.youtube.com/@teamdaksh9836"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-lime-600 hover:bg-lime-700 px-8 py-4 rounded-full text-white font-semibold transition-all transform hover:scale-105"
            >
              <BsYoutube size={24} />
              Watch Our Journey
            </a>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
};

export default Team2;
