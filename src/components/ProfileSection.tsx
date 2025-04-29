import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProfileSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Données mockées des développeurs
  const developers = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Développeuse Full Stack Senior",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      rating: 4.9,
      reviews: 37,
      projects: 18,
      description: "Experte en développement web avec 7 ans d'expérience. Spécialisée dans la création d'applications React performantes et de backends Node.js scalables."
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Développeur Full Stack JavaScript",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      skills: ["Vue.js", "Express", "JavaScript", "PostgreSQL", "Docker"],
      rating: 4.8,
      reviews: 29,
      projects: 15,
      description: "Passionné par le développement full stack JavaScript, j'ai aidé plus de 15 startups à lancer leurs produits avec des solutions robustes et évolutives."
    },
    {
      id: 3,
      name: "Émilie Rousseau",
      role: "Développeuse Full Stack & DevOps",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      skills: ["React", "Django", "Python", "CI/CD", "Kubernetes"],
      rating: 4.7,
      reviews: 42,
      projects: 23,
      description: "Développeuse polyvalente avec expertise en DevOps. J'accompagne les entreprises dans la création et le déploiement d'applications web complexes."
    },
    {
      id: 4,
      name: "Lucas Moreau",
      role: "Développeur Full Stack Java/React",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      skills: ["React", "Java", "Spring Boot", "MySQL", "JUnit"],
      rating: 4.9,
      reviews: 31,
      projects: 17,
      description: "Spécialiste des applications d'entreprise avec Java et des interfaces modernes avec React. 10 ans d'expérience dans le développement de systèmes robustes."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-24 bg-gray-800/30 relative overflow-hidden" id="profiles">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-12 left-12 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
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
              Développeurs
            </span>
            <span className="block">talentueux et certifiés</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos développeurs full stack hautement qualifiés, 
            prêts à donner vie à vos projets avec expertise et passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-1 order-2 lg:order-1"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {developers.map((dev, index) => (
              <motion.div
                key={dev.id}
                className={`mb-4 cursor-pointer relative overflow-hidden group ${
                  activeIndex === index 
                    ? 'border-l-4 border-[#40E0D0]' 
                    : 'border-l-4 border-transparent'
                }`}
                variants={item}
                onClick={() => setActiveIndex(index)}
                whileHover={{ x: 5 }}
              >
                <div 
                  className={`p-6 rounded-r-lg transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-gray-700/80' 
                      : 'bg-gray-800/40 hover:bg-gray-700/40'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-600 group-hover:border-[#40E0D0] transition-all duration-300">
                      <img 
                        src={dev.image} 
                        alt={dev.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">{dev.name}</h3>
                      <p className="text-sm text-gray-300">{dev.role}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center text-sm">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-300">{dev.rating} ({dev.reviews} avis)</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-2 order-1 lg:order-2 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div 
                className="w-full md:w-1/3 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={developers[activeIndex].id}
              >
                <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden border-2 border-gray-700 shadow-lg relative">
                  <img 
                    src={developers[activeIndex].image} 
                    alt={developers[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 p-4">
                    <div className="text-white font-bold">{developers[activeIndex].name}</div>
                    <div className="text-gray-300 text-sm">{developers[activeIndex].role}</div>
                  </div>
                </div>

                <motion.div 
                  className="absolute -bottom-5 -right-5 bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-700"
                  animate={{ 
                    y: [0, -5, 0],
                    boxShadow: [
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      "0 20px 25px -5px rgba(123, 31, 162, 0.3)",
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "mirror" 
                  }}
                >
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-white text-sm">Disponible</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="w-full md:w-2/3"
                key={`details-${developers[activeIndex].id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{developers[activeIndex].name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400 text-lg">★ {developers[activeIndex].rating}</span>
                    <span className="text-gray-300">({developers[activeIndex].reviews} avis)</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{developers[activeIndex].description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Compétences</h4>
                  <div className="flex flex-wrap gap-2">
                    {developers[activeIndex].skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-white border border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div>
                    <h4 className="text-gray-400 text-sm">Projets complétés</h4>
                    <p className="text-white text-xl font-bold">{developers[activeIndex].projects}</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Taux de satisfaction</h4>
                    <p className="text-white text-xl font-bold">98%</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Délai de réponse</h4>
                    <p className="text-white text-xl font-bold">< 2h</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] text-white font-medium"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(123, 31, 162, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contacter
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white font-medium border border-gray-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Voir le portfolio
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 text-base font-medium rounded-full bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 text-white hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tous les développeurs
            <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;
