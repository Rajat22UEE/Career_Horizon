"use client";

import React from 'react';
import { Rocket, UserCheck, Search } from 'lucide-react';

export default function WhyCH() {
  const reasons = [
    {
      icon: <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: 'Fast Career Launch',
      description:
        'Kickstart your career with our curated internships and job listings tailored to your skills.',
      bg: 'bg-blue-800',
    },
    {
      icon: <Search className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: 'Smart Search Tools',
      description:
        'Use intelligent filters to find roles that match your ambitions and interests quickly.',
      bg: 'bg-emerald-800',
    },
    {
      icon: <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: 'Verified Opportunities',
      description:
        'All listings are verified to ensure legitimate and trusted opportunities for your growth.',
      bg: 'bg-purple-800',
    },
  ];

  return (
    <div className="py-16 sm:py-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-snug">
          WHY CHOOSE <span className="text-blue-600">CareerHorizon</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
          Elevate your career journey with a platform built for students and early professionals.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`relative p-6 sm:p-8 min-h-[200px] rounded-3xl text-white overflow-hidden 
              ${reason.bg} 
              shadow-none transition-all ease-in-out duration-300 
              hover:-translate-y-1 hover:shadow-[2px_5px_0_0_rgba(0,0,0,1)] 
              active:translate-y-0.5 active:shadow-none`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-5 relative z-10">
              <div className="p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur">
                {reason.icon}
              </div>
            </div>

            {/* Title & Description */}
            <div className="relative z-10 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-sm sm:text-base font-medium">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
