'use client';

import { Calendar } from 'lucide-react';
import { useState } from 'react';
import SchedulerModal from './SchedulerModal';

export default function FloatingActionButton() {
  const [showScheduler, setShowScheduler] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowScheduler(true)}
        className="fixed bottom-8 right-8 z-40 bg-[#FFD700] text-[#111111] p-4 rounded-full shadow-lg hover:bg-[#FFC700] transition-all duration-200 hover:scale-110 flex items-center gap-2"
        aria-label="Schedule consultation"
      >
        <Calendar size={24} />
        <span className="hidden sm:inline font-bold">SCHEDULE NOW</span>
      </button>

      <SchedulerModal 
        isOpen={showScheduler} 
        onClose={() => setShowScheduler(false)} 
      />
    </>
  );
}
