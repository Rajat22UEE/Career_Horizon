'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HRCard from '../components/HR-Explore';
import WhyCH from '../components/WhyCH';
import WorkCompo from '../components/WorkCompo';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative">
      {/* Main Content */}
      <div className="relative z-20">
        <HeroSection />
        <WorkCompo />
        <WhyCH />
        <HRCard />
      </div>

      {/* Normal Footer at bottom */}
      <Footer />
    </div>
  );
}
