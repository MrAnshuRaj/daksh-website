import React, { memo } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const Card = memo(({ title, description, imgUrl }) => {
  return (
    <motion.div
      className="relative w-full max-w-sm cursor-pointer rounded-3xl bg-black/20 backdrop-blur-sm border border-lime-600/30 shadow-md shadow-lime-500/20 transition-all duration-300 will-change-transform hover:shadow-lime-400/40"
      variants={cardVariants}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400/20 to-green-500/20 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      
      {/* Card content */}
      <div className="relative bg-black/25 backdrop-blur-sm rounded-3xl overflow-hidden">
        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            src={imgUrl}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-lime-300 mb-3 drop-shadow-sm">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
          
          {/* Subtle accent line */}
          <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-lime-400 to-transparent opacity-60"></div>
        </div>
      </div>
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;
