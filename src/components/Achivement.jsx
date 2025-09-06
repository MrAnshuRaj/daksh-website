import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTrophy, FaMedal, FaAward, FaStar, FaCrown, FaFire } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

const achievementsData = [
  { 
    id: "1", 
    title: "BAJA SAE INDIA", 
    year: "2023", 
    highlight: "🏆 1st Position Among All NITs",
    description: "29th Overall - Historic Achievement", 
    tier: "platinum",
    icon: FaCrown,
    rank: "#1"
  },
  { 
    id: "2", 
    title: "BAJA SAE INDIA", 
    year: "2021", 
    highlight: "🥇 4th Position Among All NITs",
    description: "Outstanding Engineering Excellence", 
    tier: "gold",
    icon: FaTrophy,
    rank: "#4"
  },
  { 
    id: "3", 
    title: "BAJA SAE INDIA", 
    year: "2019", 
    highlight: "🌱 1st Position in GO GREEN",
    description: "12th In Baja Virtuals", 
    tier: "gold",
    icon: FaAward,
    rank: "#1"
  },
  { 
    id: "4", 
    title: "BAJA SAE INDIA", 
    year: "2018", 
    highlight: "💻 1st In Baja Virtuals",
    description: "Runner Up In GO GREEN Event", 
    tier: "gold",
    icon: FaStar,
    rank: "#1"
  },
  { 
    id: "5", 
    title: "BAJA SAE INDIA", 
    year: "2016", 
    highlight: "🏁 25th Overall",
    description: "3rd Position In Endurance Race", 
    tier: "silver",
    icon: FaMedal,
    rank: "#25"
  },
  { 
    id: "6", 
    title: "BAJA STUDENT INDIA", 
    year: "2015", 
    highlight: "📊 6th Overall",
    description: "2nd Position In Sales Report", 
    tier: "silver",
    icon: FaAward,
    rank: "#6"
  },
  { 
    id: "7", 
    title: "BAJA STUDENT INDIA", 
    year: "2016", 
    highlight: "🎨 12th Overall",
    description: "5th Position In Design Event", 
    tier: "bronze",
    icon: FaMedal,
    rank: "#12"
  },
  { 
    id: "8", 
    title: "BAJA SAE INDIA", 
    year: "2011", 
    highlight: "🌿 Go Green Award",
    description: "3rd Position In Endurance", 
    tier: "silver",
    icon: FaAward,
    rank: "ECO"
  },
  { 
    id: "9", 
    title: "BAJA SAE SOUTH AFRICA", 
    year: "2010", 
    highlight: "🛡️ Safest Vehicle Award",
    description: "International Recognition", 
    tier: "gold",
    icon: FaTrophy,
    rank: "🌍"
  },
];

const tierStyles = {
  platinum: {
    bg: "bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-yellow-500/20",
    border: "border-purple-400/40",
    glow: "shadow-purple-500/30",
    text: "text-purple-300",
    badge: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  gold: {
    bg: "bg-gradient-to-br from-yellow-500/20 via-orange-500/15 to-yellow-600/20",
    border: "border-yellow-400/40",
    glow: "shadow-yellow-500/30",
    text: "text-yellow-300",
    badge: "bg-gradient-to-r from-yellow-500 to-orange-500"
  },
  silver: {
    bg: "bg-gradient-to-br from-gray-400/20 via-slate-500/15 to-gray-600/20",
    border: "border-gray-400/40",
    glow: "shadow-gray-500/30",
    text: "text-gray-300",
    badge: "bg-gradient-to-r from-gray-500 to-slate-500"
  },
  bronze: {
    bg: "bg-gradient-to-br from-orange-600/20 via-amber-600/15 to-orange-700/20",
    border: "border-orange-400/40",
    glow: "shadow-orange-500/30",
    text: "text-orange-300",
    badge: "bg-gradient-to-r from-orange-600 to-amber-600"
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const AchievementCard = ({ achievement, index }) => {
  const { title, year, highlight, description, tier, icon: Icon, rank } = achievement;
  const styles = tierStyles[tier];
  
  return (
    <motion.div
      variants={itemVariants}
      className={`group relative overflow-hidden ${styles.bg} backdrop-blur-xl ${styles.border} rounded-3xl p-8 ${styles.glow} shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer`}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HiSparkles className="absolute top-4 right-4 text-lime-400/30 animate-pulse" size={16} />
        <HiLightningBolt className="absolute bottom-4 left-4 text-lime-400/20 animate-bounce delay-300" size={12} />
      </div>

      {/* Header with Icon and Rank */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className={`p-4 ${styles.badge} rounded-2xl shadow-lg`}>
            <Icon className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white leading-tight mb-1">
              {title}
            </h3>
            <span className="text-sm font-medium text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full">
              {year}
            </span>
          </div>
        </div>
        
        {/* Rank Badge */}
        <div className={`${styles.badge} px-4 py-2 rounded-full shadow-lg min-w-[60px] text-center`}>
          <span className="text-white font-bold text-sm">{rank}</span>
        </div>
      </div>

      {/* Achievement Content */}
      <div className="relative z-10 space-y-4">
        <div className="relative">
          <h4 className={`font-bold text-lg ${styles.text} mb-2 leading-relaxed`}>
            {highlight}
          </h4>
          <div className="w-16 h-0.5 bg-gradient-to-r from-lime-400 to-transparent rounded-full"></div>
        </div>
        
        {description && (
          <p className="text-gray-200 text-base leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Achievement Number */}
      <div className="absolute bottom-4 right-4 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-lime-400/20 to-green-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm -z-10`}></div>
    </motion.div>
  );
};

const Achievement = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-emerald-900/30 to-green-950 py-24 px-6 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-green-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-lime-400/6 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center mt-10 gap-3 bg-gradient-to-r from-lime-500/20 to-green-600/20 backdrop-blur-md border border-lime-400/40 rounded-full px-20 py-4 mb-8 shadow-lg shadow-lime-500/30">
            <HiSparkles className="text-lime-400 text-xl animate-pulse" />
            <span className="text-lime-400 font-bold text-lg tracking-wide">Hall of Excellence</span>
            <HiSparkles className="text-lime-400 text-xl animate-pulse delay-300" />
          </div>

          {/* Main Title with Enhanced Typography */}
          <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 bg-clip-text text-transparent animate-pulse">
              Legacy
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Over a decade of groundbreaking achievements in sustainable vehicle engineering, 
            from national championships to international recognition.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { icon: FaTrophy, number: '25+', label: 'Total Awards' },
              { icon: FaCrown, number: '15', label: 'Years Legacy' },
              { icon: FaFire, number: '3', label: 'International' },
              { icon: HiLightningBolt, number: '#1', label: 'Among NITs' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-black/30 backdrop-blur-md border border-lime-400/20 rounded-2xl p-6 min-w-[120px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <stat.icon className="text-lime-400 text-3xl mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Achievements Grid */}
        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievementsData.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
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
            Discover the complete story behind each achievement, the challenges overcome, and the innovations that made them possible.
          </p>
          
          <Link
            to="/achivements"
            className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-400 hover:to-green-500 px-10 py-5 rounded-2xl text-black font-bold text-xl shadow-2xl shadow-lime-500/40 transition-all duration-300 hover:scale-105 hover:shadow-3xl overflow-hidden"
          >
            <span className="relative z-10">Explore Complete Journey</span>
            <HiLightningBolt className="relative z-10 group-hover:rotate-12 transition-transform duration-300" size={24} />
            
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievement;
