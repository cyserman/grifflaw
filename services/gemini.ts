
import { GoogleGenAI, Type } from "@google/genai";
import { EvidenceItem } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function analyzeEvidence(evidence: EvidenceItem[]) {
  const prompt = `
    As a legal analysis assistant, analyze the following evidence items. 
    1. Assess 'docket readiness' (0-100 score).
    2. Detect potential conflicts or contradictions between statements.
    3. Suggest missing pieces of evidence that would strengthen the case.
    4. Provide a 2-sentence executive summary.

    Evidence Data:
    ${evidence.map(e => `[${e.timestamp}] ${e.sender}: ${e.content}`).join('\n')}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            readinessScore: { type: Type.INTEGER },
            conflicts: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            summary: { type: Type.STRING }
          },
          required: ["readinessScore", "conflicts", "suggestions", "summary"]
        }
      }
    });

    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
}
