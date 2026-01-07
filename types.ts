
export enum EvidenceType {
  MESSAGE = 'MESSAGE',
  DOCUMENT = 'DOCUMENT',
  EMAIL = 'EMAIL',
  PHOTO = 'PHOTO'
}

export interface EvidenceItem {
  id: string;
  type: EvidenceType;
  sender: string;
  content: string;
  timestamp: string;
  hash: string;
  verified: boolean;
  isInTimeline: boolean;
  notes?: string;
}

export interface CaseSummary {
  caseName: string;
  clientName: string;
  totalEvidence: number;
  docketReadiness: number; // 0-100
  conflictsDetected: number;
}

export interface AnalysisResult {
  readinessScore: number;
  conflicts: string[];
  suggestions: string[];
  summary: string;
}

export enum ActiveLayer {
  SPINE = 'SPINE',
  TIMELINE = 'TIMELINE',
  NOTES = 'NOTES',
  AI = 'AI'
}
