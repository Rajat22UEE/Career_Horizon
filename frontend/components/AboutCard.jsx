"use client";

import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

export default function AboutCard() {
  return (
    <div
      className="bg-[#B9A0FF] text-[#144946] rounded-3xl shadow-lg border border-transparent 
      transition-all duration-300 hover:scale-[1.01] hover:border-2 hover:border-[#144946] 
      hover:shadow-[0_0_20px_#144946] max-w-6xl mx-auto mt-10 px-4 sm:px-6 py-10"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center flex justify-center items-center gap-3">
        <FaInfoCircle className="text-2xl sm:text-3xl md:text-4xl text-[#144946]" />
        <span>
          About <span className="text-[#144946]">Us</span>
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium text-center max-w-3xl mx-auto">
        <strong>CareerHorizon</strong> is a platform dedicated to empowering students and job seekers by
        providing curated job listings, internship opportunities, and access to verified HR contacts — all in one place. 
        We aim to bridge the gap between talent and opportunity with trusted resources and career support.
      </p>
    </div>
  );
}
