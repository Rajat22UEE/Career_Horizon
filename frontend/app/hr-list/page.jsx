"use client";

import React, { useEffect, useState } from 'react';
import HRCard from './components/HRCard';
import { listHRs } from '../../lib/api';

export default function HRDirectoryPage() {
  const [hrList, setHrList] = useState([]);
  useEffect(() => {
    listHRs()
      .then(data => setHrList(Array.isArray(data) ? data : []))
      .catch(error => console.error('Error fetching HR list:', error));
  }, []);

  return (
    <div className="min-h-screen bg-white px-4 py-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">HR Contact Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hrList && hrList.length > 0 ? (
          hrList.map((hr) => (
            <HRCard key={hr._id || hr.id} data={hr} />
          ))
        ) : (
          <p className="text-gray-600">No HR contacts available at the moment.</p>
        )}
      </div>
    </div>
  );
}
