import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AISection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Simulation d'une conversation IA
  const aiMessages = [
    { 
      role: "user", 
      message: "Je cherche un développeur full stack avec 5 ans d'expérience en React et Node.js", 
      timestamp: "14:25" 
    },
    { 
      role: "bot", 
      message: "J'ai trouvé 8 développeurs correspondant à vos critères. Avez-vous des préférences concernant le secteur d'activité ou la taille des projets réalisés ?", 
      timestamp: "14:25" 
    },
    { 
      role: "user", 
      message: "Plutôt des projets e-commerce ou marketplace", 
      timestamp: "14:26" 
    },
    { 
      role: "bot", 
      message: "Très bien. Parmi les développeurs disponibles, Sophie Martin et Lucas Moreau ont une solide expérience en e-commerce. Sophie a travaillé sur 6 projets de marketplace, tandis que Lucas a développé 3 plateformes e-commerce complètes. Souhaitez-vous voir leurs profils ?", 
      timestamp: "14:26" 
    },
    { 
      role: "suggestions", 
      options: ["Voir le profil de Sophie", "Voir le profil de Lucas", "Afficher plus de développeurs"]
    }
  ];

  return (
    <section id="ai-section" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-700/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMzMzNDQiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgNDhjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0UzQ5LjI1NSAwIDM2IDB6IiBmaWxsPSIjNDQ0NDU1Ii8+PC9nPjwvc3ZnPg==')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div 
            ref={ref}
            className="w-full lg:w-1/2"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2]">
                Intelligence Artificielle
              </span>
              <span className="block mt-2 text-white">au service de votre recrutement</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Notre système d'IA analyse des millions de données pour vous proposer les développeurs parfaitement 
              adaptés à vos besoins spécifiques, en considérant compétences techniques, soft skills et compatibilité culturelle.
            </p>
            
            <div className="space-y-6 mb-8">
              {/* AI Feature points */}
              {[
                {
                  title: "Recherche contextuelle avancée",
                  description: "Notre IA comprend votre demande en langage naturel et identifie précisément vos besoins."
                },
                {
                  title: "Recommandations personnalisées",
                  description: "Le système apprend de vos préférences et affine ses suggestions à chaque interaction."
                },
                {
                  title: "Analyse prédictive de compatibilité",
                  description: "L'IA évalue la probabilité de succès des collaborations en fonction de multiples facteurs."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-3 text-base font-medium rounded-full bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] text-white shadow-lg hover:shadow-xl transform transition"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(123, 31, 162, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                Essayer l'IA maintenant
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Interactive AI Chat Demo */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl relative"
              variants={fadeIn}
            >
              {/* Chat Header */}
              <div className="bg-gray-900 border-b border-gray-700 p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2] flex items-center justify-center text-white font-bold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium">Assistant IA</div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <div className="text-xs text-gray-300">En ligne</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="p-4 h-[380px] overflow-y-auto space-y-4">
                {aiMessages.map((msg, index) => {
                  if (msg.role === "suggestions") {
                    return (
                      <motion.div 
                        key={`suggestions-${index}`}
                        className="flex flex-wrap gap-2 mt-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + (index * 0.2), duration: 0.3 }}
                      >
                        {msg.options?.map((option, i) => (
                          <motion.button
                            key={i}
                            className="px-4 py-2 rounded-full bg-gray-700 text-white text-sm hover:bg-gray-600"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {option}
                          </motion.button>
                        ))}
                      </motion.div>
                    );
                  }
                  
                  return (
                    <motion.div 
                      key={index}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (index * 0.3), duration: 0.5 }}
                    >
                      <div 
                        className={`max-w-[80%] rounded-2xl p-4 relative ${
                          msg.role === "user" 
                            ? "bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] text-white"
                            : "bg-gray-700 text-white"
                        }`}
                      >
                        <p className="text-sm sm:text-base">{msg.message}</p>
                        <span className={`text-xs ${msg.role === "user" ? "text-blue-200" : "text-gray-400"} block mt-1`}>
                          {msg.timestamp}
                        </span>
                        
                        {/* Triangle shape for chat bubble */}
                        <div 
                          className={`absolute w-4 h-4 transform rotate-45 ${
                            msg.role === "user"
                              ? "bg-[#7B1FA2] -right-1 top-4"
                              : "bg-gray-700 -left-1 top-4"
                          }`}
                        ></div>
                      </div>
                    </motion.div>
                  );
                })}
                
                {/* Typing animation */}
                <motion.div 
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                >
                  <div className="bg-gray-700 rounded-2xl p-4 flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "600ms" }}></div>
                  </div>
                </motion.div>
              </div>
              
              {/* Chat Input */}
              <div className="border-t border-gray-700 p-4">
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Décrivez le développeur que vous recherchez..." 
                    className="w-full bg-gray-700 border border-gray-600 rounded-l-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2] text-white rounded-r-full px-6 py-3 hover:shadow-lg transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
