
import React, { useState } from 'react';
import { EvidenceItem, AnalysisResult } from '../types';
import { analyzeEvidence } from '../services/gemini';

interface AIAnalysisViewProps {
  evidence: EvidenceItem[];
}

export const AIAnalysisView: React.FC<AIAnalysisViewProps> = ({ evidence }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalysis = async () => {
    setLoading(true);
    setError(null);
    try {
      const analysis = await analyzeEvidence(evidence);
      setResult(analysis);
    } catch (err) {
      setError("Failed to run TruthTrack™ Analysis. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="truth-track-gradient p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-2">TruthTrack™ AI Engine</h3>
            <p className="text-blue-100 max-w-2xl opacity-90">
              Our patented layer detects conflicts, validates docket readiness, and ensures your narrative holds up under scrutiny.
            </p>
          </div>
          <svg className="absolute right-0 bottom-0 w-64 h-64 text-blue-400 opacity-20 transform translate-x-1/4 translate-y-1/4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 15.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM12 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z" />
          </svg>
        </div>

        <div className="p-8">
          {!result && !loading && (
            <div className="text-center py-12">
              <div className="mb-6 inline-flex p-4 bg-blue-50 rounded-full">
                 <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Ready for Assessment</h4>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Click below to process {evidence.length} pieces of evidence through TruthTrack™ Conflict Detection.
              </p>
              <button 
                onClick={handleAnalysis}
                className="px-8 py-3 truth-track-gradient text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                Run Analysis
              </button>
            </div>
          )}

          {loading && (
            <div className="text-center py-20">
               <div className="flex justify-center mb-6">
                 <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
               </div>
               <h4 className="text-xl font-bold text-gray-900 mb-2 italic">Scanning Layers...</h4>
               <p className="text-gray-500">Comparing Spine data to Timeline narratives...</p>
            </div>
          )}

          {error && (
             <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 mb-6">
                {error}
             </div>
          )}

          {result && !loading && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Readiness Score</p>
                   <div className="flex items-end space-x-2">
                     <span className="text-5xl font-black text-blue-600">{result.readinessScore}</span>
                     <span className="text-xl text-gray-400 font-bold mb-1">/100</span>
                   </div>
                </div>
                <div className="col-span-2 bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                   <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">Executive Summary</p>
                   <p className="text-blue-900 leading-relaxed font-medium">
                     {result.summary}
                   </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div>
                   <h4 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                     <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                     </svg>
                     Conflict Detection
                   </h4>
                   <ul className="space-y-3">
                     {result.conflicts.map((conflict, i) => (
                       <li key={i} className="p-4 bg-red-50 border border-red-100 rounded-lg text-sm text-red-800">
                         {conflict}
                       </li>
                     ))}
                     {result.conflicts.length === 0 && (
                        <li className="p-4 bg-green-50 border border-green-100 rounded-lg text-sm text-green-800">
                          No significant conflicts detected in the current evidence set.
                        </li>
                     )}
                   </ul>
                 </div>

                 <div>
                    <h4 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Strengthening Suggestions
                    </h4>
                    <ul className="space-y-3">
                      {result.suggestions.map((sug, i) => (
                        <li key={i} className="p-4 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-700 flex items-start">
                          <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                          {sug}
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex justify-center">
                 <button 
                  onClick={() => setResult(null)}
                  className="text-sm font-bold text-gray-500 hover:text-gray-800 transition-colors uppercase tracking-widest"
                >
                   Reset Analysis
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
