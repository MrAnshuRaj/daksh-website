import React from 'react';
import { FaHandshake, FaRocket, FaUsers, FaLeaf } from 'react-icons/fa6';
import { BsDownload, BsShieldCheck, BsTrophy } from 'react-icons/bs';
import { FaDonate, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    className="group relative overflow-hidden bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-xl border border-lime-500/30 rounded-2xl p-10 m-4 hover:border-lime-400/60 transition-all duration-300 hover:scale-105"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-lime-500/20 text-lime-400">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-base leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const ActionCard = ({ icon: Icon, title, href, external = false }) => (
  <motion.div className="group relative overflow-hidden m-4" whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
    {external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <div className="bg-gradient-to-br from-lime-500/20 to-green-600/20 backdrop-blur-xl border border-lime-400/40 rounded-3xl p-12 text-center hover:border-lime-300/60 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/25">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-lime-500/30 text-lime-300 group-hover:text-lime-200 transition-colors">
            <Icon size={36} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <div className="w-16 h-0.5 bg-lime-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </a>
    ) : (
      <Link to={href}>
        <div className="bg-gradient-to-br from-lime-500/20 to-green-600/20 backdrop-blur-xl border border-lime-400/40 rounded-3xl p-12 text-center hover:border-lime-300/60 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/25">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-lime-500/30 text-lime-300 group-hover:text-lime-200 transition-colors">
            <Icon size={36} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <div className="w-16 h-0.5 bg-lime-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>
    )}
  </motion.div>
);

const Sponser = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-500/10 via-transparent to-transparent"></div>
          <motion.div className="max-w-6xl mx-auto px-8 text-center relative z-10" variants={stagger} initial="initial" animate="animate">
            <motion.h1 className="text-6xl md:text-7xl font-black mb-10 leading-tight" variants={fadeInUp}>
              <span className="text-white">Sponsor </span>
              <span className="bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">Team Daksh</span>
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light px-4" variants={fadeInUp}>
              Join us in revolutionizing sustainable mobility. Partner with innovation, sustainability, and competitive excellence in electric off-road racing.
            </motion.p>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-green-500 mx-auto rounded-full" variants={fadeInUp}></motion.div>
          </motion.div>
        </section>

        {/* Action Cards */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div className="grid md:grid-cols-3 gap-12" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <ActionCard icon={FaHandshake} title="Become Our Partner" href="/partner" />
              <ActionCard icon={FaDonate} title="Support Our Mission" href="mailto:daksh.nitjsr@nitjsr.ac.in" external />
              <ActionCard icon={BsDownload} title="Download Brochure" href="/brouchre.pdf" external />
            </motion.div>
          </div>
        </section>

        {/* Why Sponsor Us Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-5 mb-8">
                Why Partner With <span className="text-lime-400">Us?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">Discover the benefits of joining our mission to revolutionize electric mobility</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-2">
              <FeatureCard icon={FaUsers} title="Networking Excellence" description="Connect with industry leaders, innovators, and like-minded organizations in the electric mobility space." delay={0} />
              <FeatureCard icon={BsTrophy} title="Brand Recognition" description="Associate your brand with cutting-edge innovation and competitive excellence in sustainable technology." delay={0.1} />
              <FeatureCard icon={FaLeaf} title="Sustainability Impact" description="Demonstrate your commitment to environmental responsibility and sustainable future initiatives." delay={0.2} />
              <FeatureCard icon={FaRocket} title="Innovation Partnership" description="Be part of groundbreaking developments in electric vehicle technology and off-road engineering." delay={0.3} />
              <FeatureCard icon={FaLightbulb} title="Shared Vision" description="Support a cause that aligns with forward-thinking values and technological advancement." delay={0.4} />
              <FeatureCard icon={BsShieldCheck} title="Trusted Partnership" description="Join a reputable academic institution with a proven track record of excellence and integrity." delay={0.5} />
            </div>
          </div>
        </section>

        {/* Bank Details Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              className="bg-gradient-to-br from-lime-500/10 to-green-600/10 backdrop-blur-xl border border-lime-400/30 rounded-3xl p-16 mx-8 my-16 text-center shadow-lg shadow-lime-500/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-12">Banking Information</h2>
              <div className="grid md:grid-cols-2 gap-16 text-left max-w-5xl mx-auto">
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <span className="text-lime-400 font-semibold min-w-[150px] text-lg">Account Name:</span>
                    <span className="text-gray-200 text-lg leading-relaxed">Society of Automotive Engineers, NIT JAMSHEDPUR</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-lime-400 font-semibold min-w-[150px] text-lg">Account No:</span>
                    <span className="text-gray-200 font-mono text-lg tracking-wider">30375314280</span>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <span className="text-lime-400 font-semibold min-w-[150px] text-lg">IFSC Code:</span>
                    <span className="text-gray-200 font-mono text-lg tracking-wider">SBIN0001882</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-lime-400 font-semibold min-w-[150px] text-lg">UPI/Mobile:</span>
                    <span className="text-gray-200 font-mono text-lg tracking-wider">8210258224</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 mb-5">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-white mb-8">Ready to Drive the Future?</h2>
              <p className="text-xl text-gray-300 mb-12 px-4">Join Team Daksh in revolutionizing electric mobility and sustainable technology.</p>
              <Link
                to="/contact"
                className="inline-flex mb-10 items-center gap-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-400 hover:to-green-500 px-12 py-6 rounded-full text-white font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-lime-500/25"
              >
                Get Started Today
                <FaRocket size={20} />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sponser;
