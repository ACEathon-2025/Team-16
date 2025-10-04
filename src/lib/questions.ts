// src/lib/questions.ts
export type QType = "text" | "number" | "choice" | "multi";

export interface HealthQuestion {
  id: string;
  question: string;
  type: QType;
  options?: string[];
  allowCustom?: boolean;
  placeholder?: string;
}

export const healthQuestions: HealthQuestion[] = [
  { id: "fullName", question: "What is your full name?", type: "text" },
  { id: "age", question: "How old are you?", type: "number" },
  {
    id: "gender",
    question: "What is your gender?",
    type: "choice",
    options: ["Male", "Female", "Other", "Prefer not to say"],
  },
  {
    id: "conditions",
    question: "Have you been diagnosed with any of these conditions?",
    type: "multi",
    options: [
      "Diabetes",
      "High Blood Pressure",
      "Asthma",
      "Heart Problems",
      "Thyroid",
      "None",
    ],
    allowCustom: true,
  },
  {
    id: "medications",
    question: "Are you taking any regular medications?",
    type: "text",
    placeholder: "List medicine names if known",
  },
  {
    id: "allergies",
    question: "Do you have any allergies (food, medicine, etc.)?",
    type: "text",
  },
  {
    id: "foodHabit",
    question: "What is your food habit?",
    type: "choice",
    options: ["Vegetarian", "Non-Vegetarian", "Mixed"],
  },
  {
    id: "sleepHours",
    question: "How many hours do you sleep daily?",
    type: "number",
  },
  {
    id: "activityLevel",
    question: "How active is your daily routine?",
    type: "choice",
    options: ["Low", "Moderate", "High"],
  },
  {
    id: "tobacco",
    question: "Do you consume tobacco?",
    type: "choice",
    options: ["No", "Yes - Smoking", "Yes - Chewing"],
  },
  {
    id: "alcohol",
    question: "Do you consume alcohol?",
    type: "choice",
    options: ["Yes", "No", "Occasionally"],
  },
  {
    id: "clinicAccess",
    question: "How far is the nearest clinic?",
    type: "choice",
    options: ["<1 km", "1–5 km", "5–10 km", ">10 km"],
  },
  {
    id: "budgetComfort",
    question: "How comfortable are you with medical expenses?",
    type: "choice",
    options: ["Very low", "Low", "Medium", "High"],
  },
  {
    id: "areaType",
    question: "Where do you currently live?",
    type: "choice",
    options: ["Village", "Town", "City"],
  },
];
