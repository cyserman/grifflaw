
import React from 'react';

interface DashboardProps {
  evidenceCount: number;
}

export const Dashboard: React.FC<DashboardProps> = ({ evidenceCount }) => {
  return (
    <div className="animate-fadeIn space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-lg text-[#1e3a8a]">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
             </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Total Evidence</p>
            <p className="text-2xl font-black text-gray-900">{evidenceCount}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <div className="p-3 bg-green-100 rounded-lg text-green-700">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
             </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Integrity Verified</p>
            <p className="text-2xl font-black text-gray-900">100%</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <div className="p-3 bg-yellow-100 rounded-lg text-yellow-700">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
             </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Sticky Notes</p>
            <p className="text-2xl font-black text-gray-900">12</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <div className="p-3 bg-purple-100 rounded-lg text-purple-700">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
             </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">AI Readiness</p>
            <p className="text-2xl font-black text-gray-900">82%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
           <h3 className="text-xl font-bold mb-6 flex items-center">
             <span className="w-2 h-6 bg-[#1e3a8a] mr-3 rounded-full"></span>
             Recent Imports
           </h3>
           <div className="space-y-4">
             {[1,2,3].map(i => (
               <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                 <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                     JD
                   </div>
                   <div>
                     <p className="text-sm font-bold text-gray-900">Message Thread: John Doe</p>
                     <p className="text-[10px] text-gray-500 uppercase">Imported Oct 24, 2023</p>
                   </div>
                 </div>
                 <span className="text-xs font-mono text-gray-400">#4fa2..11</span>
               </div>
             ))}
           </div>
           <button className="mt-6 w-full py-3 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors border-t border-gray-100">
             View All Evidence
           </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
           <div className="w-20 h-20 truth-track-gradient rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
             </svg>
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">Build Your Case</h3>
           <p className="text-gray-500 text-sm mb-6 max-w-xs">
             CaseCraft transforms messy digital tracks into court-ready TruthTrack™ documentation.
           </p>
           <div className="flex space-x-4">
             <button className="px-6 py-2 bg-[#1e3a8a] text-white rounded-lg text-sm font-bold shadow-md">
               Start Timeline
             </button>
             <button className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-bold">
               Documentation
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};
