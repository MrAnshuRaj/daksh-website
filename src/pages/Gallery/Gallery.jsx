import React, { useState, useMemo } from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import GalleryCard from './GalleryCard';
import Manufacturing from './manufacturing.json';
import Workshop from './Workshop.json';
import events from './events.json';
import GroupPhoto from './GroupPhoto.json';
import Celebration from './celebration.json';
import './Gallery2.css';

const categories = [
  { id: 'item1', label: 'Manufacturing', data: Manufacturing },
  { id: 'item2', label: 'Events', data: events },
  { id: 'item3', label: 'Workshop', data: Workshop },
  { id: 'item4', label: 'Group Photos', data: GroupPhoto },
  { id: 'item5', label: 'Celebration', data: Celebration },
];

const Gallery = () => {
  const [active, setActive] = useState('item1');
  const currentData = useMemo(() => categories.find(c => c.id === active)?.data || Manufacturing, [active]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-emerald-900/60 via-green-900/40 to-black relative overflow-hidden">
        {/* Background Overlay with slight blur */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        {/* Subtle Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lime-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 py-20 px-6 sm:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-md">
              Our <span className="bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent">Memories</span>
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-lime-400 to-green-500 mx-auto rounded-full shadow-md shadow-lime-500/40"></div>
            <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
              Explore our journey through captivating moments and achievements
            </p>
          </motion.div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-16">
            {categories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`relative px-8 py-3 rounded-2xl border-2 font-semibold transition-colors duration-300 focus:outline-none ${
                  id === active
                    ? 'bg-gradient-to-r from-lime-500 to-green-600 border-lime-400 text-black shadow-lg shadow-lime-500/50'
                    : 'bg-black/30 backdrop-blur-sm border-lime-600/50 text-white hover:bg-lime-600/20 hover:border-lime-400'
                }`}
              >
                {label}
                {id === active && (
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-400 to-green-500 opacity-75 blur-sm -z-10"></span>
                )}
              </button>
            ))}
          </div>

          {/* Gallery Container with subtle glassmorphic effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <div className="bg-gradient-to-br from-lime-500/10 to-green-600/10 backdrop-blur-md border border-lime-400/30 rounded-3xl p-8 shadow-md shadow-lime-700/20">
              <GalleryCard item={currentData} />
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
