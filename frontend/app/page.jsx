'use client';

import React from 'react';

import HeroSection from '../components/HeroSection';
import HRCard from '../components/HR-Explore';
import WhyCH from '../components/WhyCH';
import WorkCompo from '../components/WorkCompo';
import Footer from '../components/Footer';

export default function Home() {
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
