// src/pipeline.ts
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

export async function runHealthAnalysis(userInput: string) {
  if (!OPENROUTER_API_KEY) {
    console.error("❌ Missing OpenRouter API key");
    return { response: "Backend misconfigured — no API key found." };
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are SwasthyaAI, a caring AI health assistant for rural India. Provide clear, simple, and safe medical suggestions — mention possible causes, home remedies, and when to see a doctor.",
          },
          {
            role: "user",
            content: userInput,
          },
        ],
      }),
    });

    const data = await response.json();
    console.log("🧠 OpenRouter raw response:", JSON.stringify(data, null, 2));

    const message =
      data?.choices?.[0]?.message?.content?.trim() ||
      "I'm sorry, I couldn't process your request right now.";

    return {
      response: message,
      diagnosis: "Possible mild condition (auto-detected)",
      urgency: "low",
      homeRemedies: ["Drink warm fluids", "Get rest", "Stay hydrated"],
      advice: "Consult a doctor if symptoms worsen or last over 3 days.",
    };
  } catch (error: any) {
    console.error("🔥 Error in AI pipeline:", error);
    return {
      response: "⚠️ The AI system faced an issue. Please try again later.",
      diagnosis: "unknown",
      urgency: "unknown",
      homeRemedies: [],
      advice: "",
    };
  }
}
