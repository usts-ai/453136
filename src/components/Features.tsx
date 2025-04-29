import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Recherche IA Avancée",
      description: "Trouvez le développeur full stack idéal grâce à notre algorithme d'IA qui analyse compétences, expérience et compatibilité avec votre projet."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Recommandations Personnalisées",
      description: "Recevez des suggestions sur mesure basées sur l'historique de vos projets et vos préférences de collaboration."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      ),
      title: "Messagerie Intelligente",
      description: "Communiquez facilement avec les développeurs grâce à notre système de messagerie enrichi de suggestions automatiques basées sur le contexte."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      ),
      title: "Gestion de Projets Intégrée",
      description: "Suivez l'avancement de vos projets, partagez des documents et gérez les tâches directement dans la plateforme."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: "Vérification des Compétences",
      description: "Tous les développeurs sont évalués et certifiés par notre système pour garantir la qualité et l'authenticité des profils."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
        </svg>
      ),
      title: "Analyses et Insights",
      description: "Accédez à des statistiques détaillées et des insights sur vos projets et collaborations pour optimiser vos futures décisions."
    }
  ];

  return (
    <section className="py-24 bg-gray-900/50 relative overflow-hidden" id="features">
      {/* Fond abstrait */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#gradient)"
            fillOpacity=".05"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#40E0D0" />
              <stop offset="1" stopColor="#7B1FA2" />
            </linearGradient>
          </defs>
        </svg>
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
              Des outils puissants
            </span>
            <span className="block">pour des connexions réussies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre plateforme combine le meilleur de la technologie et de l'intelligence artificielle 
            pour rendre vos recherches de talents plus efficaces que jamais.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl transition-transform hover:shadow-xl hover:shadow-purple-500/10"
              variants={item}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(123, 31, 162, 0.1), 0 10px 10px -5px rgba(123, 31, 162, 0.04)"
              }}
            >
              <div className="flex flex-col h-full">
                <div className="p-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 w-fit mb-6 border border-gray-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 flex-grow">{feature.description}</p>
                <motion.div 
                  className="mt-6 flex items-center text-[#40E0D0] font-medium cursor-pointer group"
                  whileHover={{ x: 5 }}
                >
                  En savoir plus
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
