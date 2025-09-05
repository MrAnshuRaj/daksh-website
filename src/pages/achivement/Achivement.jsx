import React, { useMemo } from 'react';
import Card from './Card';
import Data from './data.json';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05 // Reduced from 0.1 for smoother performance
    }
  }
};

const Achivement = () => {
  // Memoize the data to prevent recalculations
  const achievementData = useMemo(() => Data, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-emerald-900/60 via-green-900/40 to-black relative overflow-hidden">
        {/* Reduced blur intensity */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        
        {/* Simplified particle effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-lime-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <section className="relative z-10 py-20 px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
              Our <span className="bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent">Achievements</span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-lime-400 to-green-500 mx-auto rounded-full shadow-sm shadow-lime-500/30"></div>
            <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
              Celebrating our journey of innovation, excellence, and sustainable engineering achievements
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {achievementData.map(({ id, title, description, imgUrl }) => (
              <Card key={id} title={title} description={description} imgUrl={imgUrl} />
            ))}
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Achivement;
