import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProfileSection from '../components/ProfileSection';
import AISection from '../components/AISection';
import Testimonials from '../components/Testimonials';
import StatsSection from '../components/StatsSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white overflow-hidden">
      <Header />
      <Hero />
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
        <Features />
        <ProfileSection />
        <AISection />
        <StatsSection />
        <Testimonials />
        <CallToAction />
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
