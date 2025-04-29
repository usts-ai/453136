import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      quote: "Notre startup a trouvé l'équipe parfaite de développeurs full stack grâce à cette plateforme. L'IA a identifié précisément les profils correspondant à nos besoins techniques et à notre culture d'entreprise.",
      author: "Marie Dupont",
      role: "CTO, TechInnovate",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      company_logo: "https://via.placeholder.com/80x40/333/fff?text=TI"
    },
    {
      id: 2,
      quote: "En tant que développeur full stack, j'ai pu multiplier mes opportunités professionnelles et trouver des projets parfaitement alignés avec mes compétences et mes aspirations. Le système de mise en relation est vraiment intelligent.",
      author: "Thomas Lefèvre",
      role: "Développeur Full Stack Senior",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      company_logo: "https://via.placeholder.com/80x40/444/fff?text=FL"
    },
    {
      id: 3,
      quote: "La qualité des développeurs sur cette plateforme est exceptionnelle. Nous avons réduit de 70% notre temps de recrutement tout en augmentant la qualité des profils et le taux de réussite de nos projets.",
      author: "Julie Bertrand",
      role: "Directrice de projet, GlobalTech",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      company_logo: "https://via.placeholder.com/80x40/555/fff?text=GT"
    },
    {
      id: 4,
      quote: "J'ai pu constituer une équipe de développement complète en moins de deux semaines. L'intelligence artificielle de la plateforme a vraiment fait la différence en identifiant des talents que je n'aurais jamais trouvés par les canaux traditionnels.",
      author: "Alexandre Moreau",
      role: "Fondateur, AppRevolution",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      company_logo: "https://via.placeholder.com/80x40/666/fff?text=AR"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Variants pour les animations
  const cardVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.6, ease: "easeIn" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section className="py-24 relative overflow-hidden" id="testimonials">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-purple-900/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>
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
              Ce que nos utilisateurs
            </span>
            <span className="block text-white">disent de nous</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez comment notre plateforme a permis à des entreprises et des développeurs 
            de créer des collaborations fructueuses.
          </p>
        </motion.div>

        <div className="relative">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden h-[400px] md:h-[320px] rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-10 flex flex-col justify-between">
                  {/* Quote icon */}
                  <svg className="w-12 h-12 text-gray-600 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,8L4,16v8h8V16h-4l4-8H10z M22,8l-6,8v8h8V16h-4l4-8H22z" />
                  </svg>
                  
                  {/* Testimonial content */}
                  <div>
                    <p className="text-xl text-gray-200 italic mb-8">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    
                    <div className="flex items-center flex-wrap gap-6">
                      <div className="flex items-center">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-600">
                          <img 
                            src={testimonials[currentIndex].avatar} 
                            alt={testimonials[currentIndex].author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-white font-semibold">{testimonials[currentIndex].author}</h3>
                          <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                        </div>
                      </div>
                      
                      <div className="ml-auto">
                        <img 
                          src={testimonials[currentIndex].company_logo} 
                          alt="Logo" 
                          className="h-10 opacity-70"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2] scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Previous/Next buttons */}
          <motion.button
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 w-12 h-12 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-700 z-10"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 w-12 h-12 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-700 z-10"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Client logos */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.p 
            className="text-center text-gray-400 mb-8"
            variants={itemVariants}
          >
            Ils nous font confiance
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            variants={itemVariants}
          >
            {[
              "TechInnovate", "GlobalTech", "AppRevolution", "DataSphere", 
              "CloudNine", "PixelPerfect"
            ].map((company, index) => (
              <motion.div
                key={index}
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-gray-800 rounded-md px-4 py-2 border border-gray-700">
                  <span className="text-white font-semibold">{company}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
