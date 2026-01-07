
import React from 'react';
import { EvidenceItem } from '../types';

interface TimelineViewProps {
  evidence: EvidenceItem[];
}

export const TimelineView: React.FC<TimelineViewProps> = ({ evidence }) => {
  const sorted = [...evidence].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

  return (
    <div className="max-w-4xl mx-auto py-8 animate-fadeIn">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-[#1e3a8a]">Evidence Timeline</h3>
        <p className="text-gray-500">Human-curated narrative for court presentation.</p>
      </div>

      <div className="relative border-l-2 border-blue-200 ml-4 md:ml-0 md:left-1/2">
        {sorted.length === 0 ? (
          <div className="text-center p-12 bg-white rounded-xl border-2 border-dashed border-gray-200">
            <p className="text-gray-500">No items added to timeline yet. Select evidence from the Spine layer.</p>
          </div>
        ) : (
          sorted.map((item, index) => (
            <div key={item.id} className={`relative mb-12 flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute top-5 -left-2.5 md:left-1/2 md:-ml-2.5 w-5 h-5 bg-[#1e3a8a] rounded-full border-4 border-white shadow-sm z-10"></div>
              
              {/* Card Container */}
              <div className="md:w-[45%] w-full pl-8 md:pl-0">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-300 transition-all transform hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                      {new Date(item.timestamp).toLocaleDateString()}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">Ref: {item.id}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.sender}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                    "{item.content}"
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <div className="flex items-center text-[10px] text-green-600 font-bold uppercase">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.9L9.03 1.74a1 1 0 01.94 0l6.864 3.16A1 1 0 0117.43 6V11a1 1 0 01-.131.488c-.68 1.155-2.074 2.805-4.524 4.38a1 1 0 01-1.075 0c-2.45-1.575-3.844-3.225-4.524-4.38A1 1 0 017 11V6a1 1 0 01.597-.916zM10 3.23l-5 2.304v4.466c0 .541.248 1.45.926 2.6A11.026 11.026 0 0010 14.502a11.026 11.026 0 004.074-1.902c.678-1.15.926-2.059.926-2.6V5.534l-5-2.304z" clipRule="evenodd" />
                      </svg>
                      Verified Integrity
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
