export interface AIAnalysis {
  diagnosis?: string;
  conditions?: string[];
  urgency?: "low" | "medium" | "high";
  suggestions?: string[];
  remedies?: string[];
  flags?: string[];
  confidence?: number;
}

export interface AIResponsePayload {
  reply: string;
  analysis?: AIAnalysis;
}
