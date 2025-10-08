import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function useAIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim()) return;

    const newMessage: ChatMessage = {
      id: uuidv4(),
      role: "user",
      content: userMessage,
    };

    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      console.log("🤖 Backend response:", data);

      const text =
        data?.response ||
        data?.message ||
        data?.content ||
        "⚠️ Sorry, I couldn’t process that right now.";

      const aiMessage: ChatMessage = {
        id: uuidv4(),
        role: "assistant",
        content: text,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Error fetching AI response:", err);
      setError("⚠️ Sorry, something went wrong while fetching AI response.");
    } finally {
      setLoading(false);
    }
  };

  return { messages, loading, error, sendMessage };
}
