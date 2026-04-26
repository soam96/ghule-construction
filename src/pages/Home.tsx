import { motion } from 'motion/react';
import Hero from '../components/Hero';
import BrandIdentity from '../components/BrandIdentity';
import TrustBar from '../components/TrustBar';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesGrid from '../components/ServicesGrid';
import ProjectsGrid from '../components/ProjectsGrid';
import ProjectSlider from '../components/ProjectSlider'; // This is the Before-After
import Process from '../components/Process';
import EmotionalSection from '../components/EmotionalSection';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import ContactSection from '../components/ContactSection';
import ScrollProgress from '../components/ScrollProgress';

import Philosophy from '../components/Philosophy';
import MaterialShowcase from '../components/MaterialShowcase';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      
      <Hero />
      <BrandIdentity />
      <TrustBar />
      
      <Philosophy />
      
      <WhyChooseUs />
      
      <ServicesGrid />

      <MaterialShowcase />

      <ProjectsGrid />
      
      <ProjectSlider />
      
      <Process />
      
      <EmotionalSection />
      
      <Testimonials />
      
      <FinalCTA />

      <ContactSection />
    </motion.div>
  );
}
