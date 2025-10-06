// src/lib/types.ts
export type Role = "user" | "bot" | "system";

export interface ChatMessage {
  id?: string;
  role: Role;
  text: string;
  createdAt?: any; // Firestore timestamp
}

export interface AIAnalysis {
  diagnosis?: string;
  conditions?: string[];
  urgency?: "low" | "medium" | "high";
  suggestions?: string[];
  remedies?: string[];
  flags?: string[];
  confidence?: number; // 0..1
}

export interface AIResponsePayload {
  reply: string;
  analysis?: AIAnalysis;
}
