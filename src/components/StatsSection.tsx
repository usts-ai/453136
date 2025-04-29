import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: '5,000+', label: 'Développeurs inscrits', icon: '👨‍💻' },
    { value: '98%', label: 'Taux de satisfaction', icon: '⭐' },
    { value: '1,200+', label: 'Projets réalisés', icon: '🚀' },
    { value: '24/7', label: 'Support client', icon: '🛠️' },
  ];

  // Animation des compteurs
  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.8,
      },
    }),
  };

  // Animation du cercle en arrière-plan
  const pulseVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gray-900/50">
      {/* Background elements */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full bg-gradient-to-br from-purple-900/5 to-blue-900/5 blur-3xl"
        variants={pulseVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      />
      
      {/* Lines grid pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px' 
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2]">
              DevConnect
            </span>
            <span className="block text-white">en chiffres</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre communauté en pleine croissance connecte les talents et les entreprises 
            pour des collaborations innovantes et réussies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              ref={ref}
              custom={index}
              variants={counterVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 text-center group overflow-hidden"
              whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)" }}
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
              
              {/* Ring decoration */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 border border-gray-700 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -top-12 -left-12 w-40 h-40 border border-gray-700 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional stats visualization */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2]"></div>
          
          <h3 className="text-2xl font-bold text-white mb-8">Croissance de notre plateforme</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chart 1 - Bar chart for projects */}
            <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700">
              <h4 className="text-lg font-medium text-white mb-4">Projets par mois</h4>
              
              <div className="h-44 flex items-end justify-between space-x-1">
                {[45, 68, 78, 56, 82, 95, 110, 89, 125, 132, 145, 160].map((value, i) => (
                  <motion.div 
                    key={i}
                    className="h-full flex-1 flex flex-col justify-end"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + (i * 0.05) }}
                  >
                    <motion.div 
                      className="bg-gradient-to-t from-[#007BFF] to-[#7B1FA2] rounded-t-sm"
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${(value / 160) * 100}%` } : { height: 0 }}
                      transition={{ duration: 1, delay: 0.8 + (i * 0.05) }}
                    ></motion.div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-2 flex justify-between text-xs text-gray-400">
                <span>Jan</span>
                <span>Déc</span>
              </div>
            </div>
            
            {/* Chart 2 - Line chart for user growth */}
            <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700">
              <h4 className="text-lg font-medium text-white mb-4">Croissance utilisateurs</h4>
              
              <div className="h-44 relative">
                {/* Line chart path */}
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path 
                    d="M0,100 L8.3,80 L16.7,82 L25,65 L33.3,68 L41.7,55 L50,58 L58.3,40 L66.7,38 L75,30 L83.3,25 L91.7,18 L100,5"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#40E0D0" />
                      <stop offset="100%" stopColor="#7B1FA2" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Points on the line */}
                {[95, 80, 82, 65, 68, 55, 58, 40, 38, 30, 25, 18, 5].map((point, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white transform -translate-x-1 -translate-y-1"
                    style={{ 
                      left: `${i * 8.3}%`, 
                      top: `${point}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 1 + (i * 0.1) }}
                  />
                ))}
              </div>
              
              <div className="mt-2 flex justify-between text-xs text-gray-400">
                <span>2022</span>
                <span>2023</span>
              </div>
            </div>
            
            {/* Chart 3 - Circular progress for success rate */}
            <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700">
              <h4 className="text-lg font-medium text-white mb-4">Taux de réussite des projets</h4>
              
              <div className="flex justify-center items-center h-44">
                <div className="relative w-32 h-32">
                  {/* Background circle */}
                  <div className="absolute inset-0 rounded-full border-8 border-gray-700"></div>
                  
                  {/* Progress circle */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="url(#circleGradient)"
                      strokeWidth="8"
                      strokeDasharray="289.027"
                      strokeDashoffset="289.027"
                      strokeLinecap="round"
                      transform="rotate(-90, 50, 50)"
                      initial={{ strokeDashoffset: 289.027 }}
                      animate={inView ? { 
                        strokeDashoffset: 289.027 * (1 - 0.95) 
                      } : { 
                        strokeDashoffset: 289.027 
                      }}
                      transition={{ duration: 2, delay: 0.8 }}
                    />
                    <defs>
                      <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#40E0D0" />
                        <stop offset="100%" stopColor="#7B1FA2" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Percentage text */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    95%
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
