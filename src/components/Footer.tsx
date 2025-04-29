import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const footerSections = [
    {
      title: "Produit",
      links: [
        { name: "Fonctionnalités", url: "#" },
        { name: "Recherche IA", url: "#" },
        { name: "Tarification", url: "#" },
        { name: "Témoignages", url: "#" },
        { name: "Guide d'utilisation", url: "#" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { name: "Centre d'aide", url: "#" },
        { name: "Blog", url: "#" },
        { name: "Communauté", url: "#" },
        { name: "Webinaires", url: "#" },
        { name: "API Documentation", url: "#" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", url: "#" },
        { name: "Carrières", url: "#" },
        { name: "Partenaires", url: "#" },
        { name: "Presse", url: "#" },
        { name: "Nous contacter", url: "#" }
      ]
    },
    {
      title: "Légal",
      links: [
        { name: "Confidentialité", url: "#" },
        { name: "Conditions d'utilisation", url: "#" },
        { name: "Cookies", url: "#" },
        { name: "RGPD", url: "#" },
        { name: "Mentions légales", url: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg> },
    { name: "LinkedIn", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg> },
    { name: "GitHub", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg> },
    { name: "Instagram", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg> },
    { name: "YouTube", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg> }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-900/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          className="pt-16 pb-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Footer top section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company info */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="text-white font-bold text-2xl">
                  <span className="text-[#40E0D0]">Dev</span>Connect<span className="text-[#7B1FA2]">AI</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Plateforme innovante propulsée par l'IA qui connecte les entreprises 
                avec les meilleurs développeurs full stack pour des collaborations réussies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index} 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Footer links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div 
                key={sectionIndex}
                className="lg:col-span-1"
                variants={itemVariants}
              >
                <h3 className="text-white font-semibold text-lg mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a 
                        href={link.url} 
                        className="text-gray-400 hover:text-white transition-colors inline-block"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Newsletter */}
          <motion.div 
            className="border-t border-gray-800 pt-8 pb-8"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-2">Restez informé</h3>
                <p className="text-gray-400">Abonnez-vous à notre newsletter pour recevoir nos dernières actualités.</p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Votre adresse email" 
                    className="flex-grow bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#40E0D0]"
                  />
                  <motion.button
                    className="bg-gradient-to-r from-[#40E0D0] to-[#7B1FA2] text-white font-medium px-6 py-3 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    S'abonner
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Footer bottom */}
          <motion.div 
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between"
            variants={itemVariants}
          >
            <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} DevConnectAI. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Plan du site</a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Back to top button */}
        <motion.div 
          className="flex justify-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gray-800 text-white p-3 rounded-full border border-gray-700 hover:bg-gray-700 transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
