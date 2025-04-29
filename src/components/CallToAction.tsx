import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CallToAction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="cta">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#007BFF]/20 to-[#7B1FA2]/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#40E0D0]/20 to-[#7B1FA2]/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12 overflow-hidden relative shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2]"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 border border-gray-600 rounded-full opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 border border-gray-600 rounded-full opacity-30"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div className="w-full lg:w-3/5" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2]">
                  Prêt à trouver le développeur
                </span>
                <span className="block text-white mt-2">parfait pour votre projet ?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Rejoignez notre communauté de talents et d'entreprises innovantes. 
                Que vous soyez à la recherche de développeurs ou de nouvelles opportunités, 
                notre plateforme propulsée par l'IA vous connecte avec les meilleurs profils.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] text-white font-medium shadow-xl hover:shadow-purple-500/20 transform transition text-base sm:text-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(123, 31, 162, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  Commencer gratuitement
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 rounded-full bg-gray-800 border border-gray-600 text-white font-medium hover:bg-gray-700 transition text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  En savoir plus
                  <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
            
            {/* Interactive element */}
            <motion.div 
              className="w-full lg:w-2/5 flex justify-center lg:justify-end"
              variants={itemVariants}
            >
              <div className="relative w-full max-w-md aspect-square">
                <motion.div 
                  className="absolute inset-0 rounded-2xl overflow-hidden border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-6"
                  whileHover={{ scale: 1.02, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-white text-xl font-bold mb-2">Démarrez en quelques minutes</h3>
                      <p className="text-gray-300 text-sm">Créez votre profil et commencez à explorer les opportunités</p>
                    </div>
                    
                    <div className="flex-grow space-y-4">
                      {/* Animated form fields */}
                      {[
                        { label: "Nom", placeholder: "Votre nom", icon: "👤" },
                        { label: "Email", placeholder: "Votre email", icon: "✉️" },
                        { label: "Type de profil", placeholder: "Entreprise ou Développeur", icon: "🔍" }
                      ].map((field, index) => (
                        <motion.div 
                          key={index} 
                          className="bg-gray-700/50 rounded-xl p-4 border border-gray-600"
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                          transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                        >
                          <div className="flex items-center">
                            <span className="text-xl mr-3">{field.icon}</span>
                            <div className="flex-grow">
                              <label className="block text-sm font-medium text-gray-400 mb-1">{field.label}</label>
                              <input 
                                type="text" 
                                placeholder={field.placeholder} 
                                className="w-full bg-transparent border-b border-gray-600 text-white focus:border-[#40E0D0] outline-none pb-1"
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.button
                      className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2] text-white font-medium"
                      whileHover={{ scale: 1.03, boxShadow: "0px 5px 15px rgba(123, 31, 162, 0.4)" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Créer mon compte
                    </motion.button>
                    
                    <p className="text-gray-400 text-xs text-center mt-4">
                      En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
                    </p>
                  </div>
                </motion.div>
                
                {/* Decorative floating elements */}
                <motion.div
                  className="absolute -top-5 -right-5 bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-700"
                  animate={{ 
                    y: [0, -10, 0],
                    boxShadow: [
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      "0 20px 25px -5px rgba(123, 31, 162, 0.3)",
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    ]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "mirror" 
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-white text-sm whitespace-nowrap">+500 nouveaux profils cette semaine</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-5 -left-5 bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-700"
                  animate={{ 
                    y: [0, 10, 0],
                    boxShadow: [
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      "0 20px 25px -5px rgba(64, 224, 208, 0.3)",
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    ]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: 1
                  }}
                >
                  <div className="text-sm text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">★★★★★</span>
                      <span>Inscription sécurisée</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
