
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { SpineView } from './components/SpineView';
import { TimelineView } from './components/TimelineView';
import { StickyNotesView } from './components/StickyNotesView';
import { AIAnalysisView } from './components/AIAnalysisView';
import { ActiveLayer, EvidenceItem, EvidenceType } from './types';

const MOCK_EVIDENCE: EvidenceItem[] = [
  {
    id: '1',
    type: EvidenceType.MESSAGE,
    sender: 'John Doe',
    content: "I promise to pay back the full amount by next Tuesday. Don't worry about the contract terms.",
    timestamp: '2023-10-15T10:30:00Z',
    hash: '8f43a3...e21',
    verified: true,
    isInTimeline: true,
  },
  {
    id: '2',
    type: EvidenceType.EMAIL,
    sender: 'Jane Smith',
    content: "Revised proposal attached. Please review the highlighted sections regarding liability.",
    timestamp: '2023-10-16T14:15:00Z',
    hash: '2a91b5...c44',
    verified: true,
    isInTimeline: false,
    notes: "Crucial for the breach of contract claim."
  },
  {
    id: '3',
    type: EvidenceType.MESSAGE,
    sender: 'John Doe',
    content: "Actually, I might need another week. Things are tight.",
    timestamp: '2023-10-22T09:00:00Z',
    hash: '5d22f1...a89',
    verified: true,
    isInTimeline: true,
  }
];

export default function App() {
  const [activeLayer, setActiveLayer] = useState<ActiveLayer>(ActiveLayer.SPINE);
  const [evidence, setEvidence] = useState<EvidenceItem[]>(MOCK_EVIDENCE);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleTimeline = (id: string) => {
    setEvidence(prev => prev.map(item => 
      item.id === id ? { ...item, isInTimeline: !item.isInTimeline } : item
    ));
  };

  const updateNotes = (id: string, notes: string) => {
    setEvidence(prev => prev.map(item => 
      item.id === id ? { ...item, notes } : item
    ));
  };

  const renderContent = () => {
    switch (activeLayer) {
      case ActiveLayer.SPINE:
        return <SpineView evidence={evidence} onToggleTimeline={toggleTimeline} />;
      case ActiveLayer.TIMELINE:
        return <TimelineView evidence={evidence.filter(e => e.isInTimeline)} />;
      case ActiveLayer.NOTES:
        return <StickyNotesView evidence={evidence} onUpdateNotes={updateNotes} />;
      case ActiveLayer.AI:
        return <AIAnalysisView evidence={evidence} />;
      default:
        return <Dashboard evidenceCount={evidence.length} />;
    }
  };

  return (
    <Layout 
      activeLayer={activeLayer} 
      setActiveLayer={setActiveLayer}
      isSidebarOpen={isSidebarOpen}
      setSidebarOpen={setSidebarOpen}
    >
      <div className="p-6 h-full overflow-y-auto">
        {renderContent()}
      </div>
    </Layout>
  );
}
