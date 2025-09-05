import React, { useState } from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const Media = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const socialLinks = [
    {
      href: 'https://www.instagram.com/team.daksh/',
      icon: BsInstagram,
      label: 'Instagram',
      hoverColor: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/20'
    },
    {
      href: 'https://www.facebook.com/teamdaksh.nitjsr/',
      icon: BsFacebook,
      label: 'Facebook',
      hoverColor: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/20'
    },
    {
      href: 'https://in.linkedin.com/company/teamdaksh',
      icon: BsLinkedin,
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-600/20'
    },
    {
      href: 'https://www.youtube.com/@teamdaksh9836',
      icon: BsYoutube,
      label: 'YouTube',
      hoverColor: 'hover:text-red-500',
      bgColor: 'hover:bg-red-500/20'
    }
  ];

  return (
    <motion.div
      className="hidden lg:flex fixed top-1/2 left-6 z-50 transform -translate-y-1/2"
      initial={{ opacity: 1, x: 0 }}
      animate={hidden ? { opacity: 0, x: -80 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {/* Glassmorphic Container */}
      <div className="relative bg-black/40 backdrop-blur-md border border-lime-400/30 rounded-2xl p-4 shadow-lg shadow-lime-700/30">
        {/* Subtle glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400/20 to-green-500/20 rounded-2xl opacity-50 blur-sm"></div>
        
        {/* Social Icons */}
        <div className="relative z-10 flex flex-col gap-3">
          {socialLinks.map(({ href, icon: Icon, label, hoverColor, bgColor }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-lime-500/80 to-green-600/80 hover:from-lime-400 hover:to-green-500 text-white rounded-xl transition-all duration-300 ${hoverColor} ${bgColor} hover:scale-110 hover:shadow-lg`}
              aria-label={label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
              
              {/* Tooltip */}
              <div className="absolute left-16 bg-black/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-lime-400/20">
                {label}
                <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-black/80 rotate-45 border-l border-b border-lime-400/20"></div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Label */}
        <div className="relative z-10 mt-4 text-center">
          <span className="text-lime-400/80 text-xs font-medium tracking-wider">
            FOLLOW
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Media;
