
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Instagram, Facebook, Youtube, Linkedin, ArrowRight, Star, TrendingUp, Users, Target } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import Services from '../components/Services';
import Packages from '../components/Packages';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      <Hero3D />
      <AboutSection />
      <Services />
      <TestimonialsSection />
      <Packages />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
