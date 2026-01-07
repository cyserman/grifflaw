
import React from 'react';
import { ActiveLayer } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeLayer: ActiveLayer;
  setActiveLayer: (layer: ActiveLayer) => void;
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeLayer, 
  setActiveLayer,
  isSidebarOpen,
  setSidebarOpen
}) => {
  const navItems = [
    { id: ActiveLayer.SPINE, label: 'Spine Layer', icon: 'M4 6h16M4 12h16M4 18h16', description: 'Immutable Repository' },
    { id: ActiveLayer.TIMELINE, label: 'Timeline Layer', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', description: 'Curated Presentation' },
    { id: ActiveLayer.NOTES, label: 'Sticky Notes', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', description: 'Private Annotations' },
    { id: ActiveLayer.AI, label: 'AI Analysis', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9-.4-2.593-.903l-.547-.547z', description: 'TruthTrack™ Insights' }
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#1e3a8a] text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-blue-800">
          {isSidebarOpen && (
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm10.707 7.707a1 1 0 00-1.414-1.414L11 12.586 9.707 11.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-xl tracking-tight">CaseCraft</span>
            </div>
          )}
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-blue-800 rounded transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isSidebarOpen ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"} />
            </svg>
          </button>
        </div>

        <nav className="flex-1 mt-6 px-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveLayer(item.id)}
              className={`w-full flex items-center p-3 rounded-lg transition-all group ${
                activeLayer === item.id 
                ? 'bg-blue-700 shadow-lg border-l-4 border-white' 
                : 'hover:bg-blue-800'
              }`}
            >
              <svg className={`w-6 h-6 ${activeLayer === item.id ? 'text-white' : 'text-blue-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {isSidebarOpen && (
                <div className="ml-3 text-left">
                  <p className={`text-sm font-semibold ${activeLayer === item.id ? 'text-white' : 'text-blue-100'}`}>{item.label}</p>
                  <p className="text-[10px] text-blue-400 opacity-80">{item.description}</p>
                </div>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-blue-800">
           {isSidebarOpen && (
              <div className="bg-blue-900/50 p-3 rounded-lg border border-blue-700">
                <p className="text-xs font-mono text-blue-300 uppercase tracking-widest mb-1">TruthTrack™</p>
                <p className="text-[10px] text-blue-200">SHA-256 Enabled</p>
              </div>
           )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-10">
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              {navItems.find(i => i.id === activeLayer)?.label}
            </h2>
            <p className="text-xs text-gray-500">Case ID: CC-2023-9982 • Family Law</p>
          </div>
          <div className="flex items-center space-x-4">
             <button className="flex items-center space-x-1 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 shadow-sm transition-all">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
               </svg>
               <span>Export Case</span>
             </button>
             <button className="px-4 py-2 truth-track-gradient text-white rounded-md text-sm font-semibold shadow-md hover:opacity-90 transition-opacity">
               Import Evidence
             </button>
          </div>
        </header>

        {/* Content Rendered Here */}
        <div className="flex-1 overflow-hidden relative">
          {children}
        </div>
      </main>
    </div>
  );
};
