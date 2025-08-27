'use client';

import React from 'react';
import { Bolt, Globe, Users } from 'lucide-react';

const headingText = 'HOW IT WORKS';
const descriptionText =
  'Discover how Career Horizon streamlines your job and internship search journey.';

function Card({
  icon,
  title,
  description,
  borderColor,
  ringColor,
  shadowColor,
  bgColor,
  iconColor,
}) {
  return (
    <div
      className={`flex items-start gap-4 p-5 sm:p-6 min-h-[180px] rounded-2xl bg-white border ${borderColor} 
      shadow-md transition duration-300 hover:shadow-xl hover:${borderColor} hover:ring-2 ${ringColor}`}
      style={{ boxShadow: `0 0 10px ${shadowColor}` }}
    >
      <div className={`p-3 sm:p-4 rounded-full ${bgColor} ${iconColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm sm:text-base font-bold text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WorkCompo() {
  return (
    <div className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 md:gap-12">
          {/* Left Side: Heading & Description */}
          <div className="md:sticky md:top-20 lg:sticky lg:top-20 self-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-5 leading-tight">
              {headingText}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-medium">
              {descriptionText}
            </p>
          </div>

          {/* Right Side: Cards */}
          <div className="space-y-6 sm:space-y-8">
            <Card
              icon={<Bolt className="w-6 h-6 sm:w-7 sm:h-7" />}
              title="Explore & Discover"
              description="Browse curated listings tailored to your interests and goals. Whether it's your dream job or the perfect internship, you'll find it here."
              borderColor="border-blue-300"
              ringColor="hover:ring-blue-300"
              shadowColor="rgba(59, 130, 246, 0.15)"
              bgColor="bg-blue-100"
              iconColor="text-blue-600"
            />
            <Card
              icon={<Globe className="w-6 h-6 sm:w-7 sm:h-7" />}
              title="Apply & Connect"
              description="Submit applications directly and get connected with recruiters who value talent like yours."
              borderColor="border-purple-300"
              ringColor="hover:ring-purple-300"
              shadowColor="rgba(168, 85, 247, 0.15)"
              bgColor="bg-purple-100"
              iconColor="text-purple-600"
            />
            <Card
              icon={<Users className="w-6 h-6 sm:w-7 sm:h-7" />}
              title="Connect People"
              description="Bridge the gap between talent and opportunity through meaningful networking."
              borderColor="border-green-300"
              ringColor="hover:ring-green-300"
              shadowColor="rgba(34, 197, 94, 0.15)"
              bgColor="bg-green-100"
              iconColor="text-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
