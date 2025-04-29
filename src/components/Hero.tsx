import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  // Animation pour le flottement
  const float = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Cercles décoratifs animés en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Contenu texte */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={item}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2]">
                Trouvez le Développeur Full Stack 
              </span>
              <span className="block mt-2">Idéal pour Votre Projet</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8"
              variants={item}
            >
              Notre plateforme utilise l'intelligence artificielle pour connecter les entreprises 
              avec les meilleurs talents tech, parfaitement adaptés à vos besoins spécifiques.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
              variants={item}
            >
              <motion.button
                className="px-8 py-3 text-base font-medium rounded-full bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] text-white shadow-lg hover:shadow-xl transform transition"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(123, 31, 162, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                Trouver un Développeur
              </motion.button>
              
              <motion.button
                className="px-8 py-3 text-base font-medium rounded-full bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Créer Votre Profil
              </motion.button>
            </motion.div>
            
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-6"
              variants={item}
            >
              <span className="text-gray-400">Utilisé par :</span>
              <div className="flex space-x-6">
                {['Google', 'Airbnb', 'Spotify', 'Microsoft'].map((company, i) => (
                  <motion.span 
                    key={i} 
                    className="text-gray-300 opacity-70 hover:opacity-100 transition cursor-pointer"
                    whileHover={{ y: -3 }}
                  >
                    {company}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image interactive */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-full h-[500px] max-w-[600px] mx-auto">
              {/* Image principale */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl backdrop-blur-sm shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1573495612937-f01934eeaaa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Développeurs travaillant ensemble" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20"></div>
                
                {/* Éléments flottants */}
                <motion.div 
                  className="absolute top-10 left-10 bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-700"
                  animate={float}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">JS</div>
                    <div className="ml-3">
                      <div className="text-white font-medium">Jean Dupont</div>
                      <div className="text-xs text-gray-300">Full Stack Developer</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-10 right-10 bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-700"
                  animate={float}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="text-green-400 text-lg">●</div>
                    <div className="text-white">23 développeurs en ligne</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute bottom-32 left-12 bg-purple-900/50 backdrop-blur-sm rounded-xl p-3 shadow-lg"
                  animate={float}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="text-sm text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">★★★★★</span>
                      <span>4.9/5</span>
                    </div>
                    <div className="text-xs text-gray-300 mt-1">912 projets réalisés</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
