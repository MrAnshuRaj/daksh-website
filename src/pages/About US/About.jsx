import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FaRocket, FaTrophy, FaUsers, FaCog, FaLeaf, FaBolt } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } }
};

const GlassCard = ({ children, className = "", gradient = false }) => (
  <motion.div
    className={`relative overflow-hidden rounded-3xl p-8 ${
      gradient 
        ? 'bg-gradient-to-br from-lime-500/15 via-green-600/10 to-emerald-700/15' 
        : 'bg-black/30'
    } backdrop-blur-md border border-lime-400/30 shadow-xl shadow-lime-600/20 hover:border-lime-400/50 transition-all duration-300 ${className}`}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
  >
    {/* Subtle glow effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400/20 to-green-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm -z-10"></div>
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const StatCard = ({ icon: Icon, number, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-gradient-to-br from-lime-500/10 to-green-600/5 backdrop-blur-md border border-lime-400/20 rounded-2xl p-6 text-center hover:border-lime-400/40 transition-all duration-300"
  >
    <Icon className="text-lime-400 text-3xl mx-auto mb-4" />
    <div className="text-3xl font-bold text-white mb-2">{number}</div>
    <div className="text-sm text-gray-300 uppercase tracking-wider">{label}</div>
  </motion.div>
);

const About = () => {
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
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-md border border-lime-400/30 rounded-full px-6 py-3 mb-8">
              <HiSparkles className="text-lime-400 text-lg" />
              <span className="text-lime-400 font-medium">About Team Daksh</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-black mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent">
                Team Daksh
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The official technical team of NIT Jamshedpur, pioneering electric all-terrain vehicle innovation 
              since 2009. We're not just building vehicles—we're engineering the future of sustainable mobility.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            <StatCard icon={FaTrophy} number="15+" label="Years Excellence" delay={0} />
            <StatCard icon={FaUsers} number="100+" label="Team Members" delay={0.1} />
            <StatCard icon={FaCog} number="50+" label="Projects Done" delay={0.2} />
            <StatCard icon={FaBolt} number="25+" label="Awards Won" delay={0.3} />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            
            {/* Left Column */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Hero Image Card */}
              <GlassCard gradient>
                <div className="text-center">
                  <img
                    src="/about2.webp"
                    alt="Team Daksh - Engineering Excellence"
                    className="rounded-2xl object-cover w-full h-80 mb-6"
                    loading="lazy"
                  />
                  <blockquote className="text-2xl font-bold text-lime-300 mb-4">
                    "We Work Together, Perform Together, Achieve Together"
                  </blockquote>
                  <p className="text-gray-300 italic">— Team Daksh Motto</p>
                </div>
              </GlassCard>

              {/* Our Journey */}
              <GlassCard>
                <div className="flex items-start gap-4">
                  <FaRocket className="text-lime-400 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-lime-300 mb-3">Our Remarkable Journey</h3>
                    <p className="text-gray-300 leading-relaxed">
                      From humble beginnings in 2009 as a small group of passionate students exploring ATV mechanisms, 
                      we've evolved into NIT Jamshedpur's premier technical team. Today, we stand as pioneers in 
                      electric vehicle innovation, consistently achieving top positions in BAJA SAE competitions worldwide.
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Vision */}
              <GlassCard>
                <div className="flex items-start gap-4">
                  <FaLeaf className="text-green-400 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-green-300 mb-3">Vision for Tomorrow</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To lead the global transition towards sustainable vehicle technologies, seamlessly blending 
                      engineering excellence with environmental responsibility. We envision a future where 
                      high-performance and eco-consciousness drive hand in hand.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Right Column */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Main Introduction */}
              <GlassCard gradient>
                <div className="border-l-4 border-lime-400 pl-6">
                  <span className="uppercase text-lime-400 font-bold tracking-widest text-sm">
                    Who We Are
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6 text-white">
                    Engineering Excellence Since 2009
                  </h2>
                  <p className="text-gray-200 leading-relaxed text-lg mb-4">
                    Team Daksh represents the pinnacle of student innovation at NIT Jamshedpur. Under the expert 
                    guidance of Dr. Sanjay and Mr. Rupak Kumar, we've successfully transitioned from traditional 
                    combustion engines to the cutting-edge world of electric propulsion.
                  </p>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    Our journey embodies the perfect fusion of academic excellence and practical innovation, 
                    making us a formidable force in international BAJA competitions.
                  </p>
                </div>
              </GlassCard>

              {/* Innovation */}
              <GlassCard>
                <div className="flex items-start gap-4">
                  <FaCog className="text-lime-400 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-lime-300 mb-3">Revolutionary Innovation</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our groundbreaking exhaust filtration system utilizes advanced plasma film technology to 
                      significantly reduce pollutants. This innovation represents the perfect synthesis of 
                      traditional mechanical engineering and cutting-edge environmental science.
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Mission */}
              <GlassCard>
                <div className="flex items-start gap-4">
                  <FaBolt className="text-yellow-400 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-300 mb-3">Mission & Purpose</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Leading the electric vehicle revolution through our flagship e-BAJA project, we're setting 
                      new benchmarks in sustainable mobility. Our mission extends beyond competition—we're 
                      cultivating the next generation of eco-conscious engineers.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Achievement Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <GlassCard gradient className="text-center">
              <FaTrophy className="text-yellow-400 text-4xl mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-lime-300 mb-4">Latest Achievement</h2>
              <p className="text-xl text-gray-200 mb-6">
                <strong>🏆 1st Place</strong> at BAJA SAE International 2024 - Electric Vehicle Category
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-lime-500/20 text-lime-300 px-6 py-3 rounded-full font-medium">
                  Innovation Excellence Award
                </span>
                <span className="bg-green-500/20 text-green-300 px-6 py-3 rounded-full font-medium">
                  Sustainability Champion
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full font-medium">
                  Best Design Award
                </span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { src: "/mission.webp", title: "Our Mission in Action" },
              { src: "/crausal2.webp", title: "Team Collaboration" },
              { src: "/crausal3.webp", title: "Innovation Lab" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold p-4">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
