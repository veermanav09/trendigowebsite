
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Instagram, Facebook, Youtube, Linkedin, ArrowRight, Star, TrendingUp, Users, Target } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      <Hero3D />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
