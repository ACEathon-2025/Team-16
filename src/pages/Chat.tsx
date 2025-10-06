import { useEffect, useRef, useState } from "react";
import { useAIChat } from "@/hooks/useAIChat";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Chat() {
  const { loading, sending, messages, sendUserMessage } = useAIChat();
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const suggestions = [
    "I have a headache and sore throat",
    "I feel chest tightness when walking",
    "I’m feeling weak and tired lately",
    "I have stomach pain after eating",
  ];

  if (loading) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Loading chat…
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b px-4 py-3">
        <div className="font-semibold">SwasthyaAI Assistant</div>
        <div className="text-xs text-gray-500">
          Describe your symptoms in your own words.
        </div>
      </header>

      {/* Chat area */}
      <main className="flex-1 overflow-y-auto px-4 py-4">
        {!messages.length && (
          <div className="mb-4 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="text-sm px-3 py-1.5 rounded-full border hover:bg-gray-50"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 shadow ${
                  m.role === "user"
                    ? "bg-primary text-white"
                    : "bg-white border"
                }`}
              >
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown>{m.text}</ReactMarkdown>
                </div>
              </div>
            </div>
          ))}

          {sending && (
            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-2xl px-4 py-2 bg-white border shadow">
                <span className="inline-flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-300 animate-bounce [animation-delay:120ms]"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-300 animate-bounce [animation-delay:240ms]"></span>
                </span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </main>

      {/* Composer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = input.trim();
          if (!text) return;
          sendUserMessage(text);
          setInput("");
        }}
        className="border-t bg-white px-3 py-3"
      >
        <div className="flex gap-2">
          <input
            className="flex-1 border rounded-xl px-4 py-2"
            placeholder="Tell me what you're feeling…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-primary text-white disabled:opacity-50"
            disabled={!input.trim() || sending}
          >
            Send
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Disclaimer: This is not a medical diagnosis. Seek professional care
          for emergencies.
        </p>
      </form>
    </div>
  );
}
