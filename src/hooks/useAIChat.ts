// src/hooks/useAIChat.ts

import { useEffect, useRef, useState } from "react";
import { auth, db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { AIResponsePayload, ChatMessage } from "@/lib/types";

export function useAIChat() {
  const user = auth.currentUser;
  const [caseId, setCaseId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const unsubRef = useRef<() => void>();

  useEffect(() => {
    (async () => {
      console.log("🧠 useAIChat started...");

      if (!user) {
        console.log("❌ No logged in user.");
        return;
      }

      console.log("✅ User UID:", user.uid);

      try {
        // Fetch profile
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          console.warn("⚠️ User document does not exist.");
          setLoading(false);
          return;
        }

        const userData = userSnap.data();
        if (!userData.profile) {
          console.warn("⚠️ User profile is missing.");
          setLoading(false);
          return;
        }

        console.log("📋 User profile loaded:", userData.profile);
        setProfile(userData.profile);

        // Create a new case
        const id = uuidv4();
        setCaseId(id);
        const caseRef = doc(db, "users", user.uid, "cases", id);

        await setDoc(caseRef, {
          createdAt: serverTimestamp(),
          startedBy: user.email || "anonymous",
        });

        console.log("📁 New case created:", id);

        // Listen to messages in this case
        const messagesRef = collection(caseRef, "messages");
        const q = query(messagesRef, orderBy("createdAt", "asc"));

        const unsub = onSnapshot(q, (snapshot) => {
          const msgs = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as ChatMessage),
          }));
          setMessages(msgs);
          console.log("💬 Messages updated:", msgs);
        });

        unsubRef.current = unsub;
        setLoading(false);
        console.log("✅ Chat interface ready");
      } catch (err) {
        console.error("🔥 Error setting up chat:", err);
        setLoading(false);
      }
    })();

    return () => unsubRef.current?.();
  }, [user]);

  const sendUserMessage = async (text: string) => {
    if (!user || !caseId || !text.trim()) return;
    setSending(true);

    const caseRef = doc(db, "users", user.uid, "cases", caseId);
    const mref = collection(caseRef, "messages");

    // Store user message
    await addDoc(mref, {
      role: "user",
      text,
      createdAt: serverTimestamp(),
    } as ChatMessage);

    try {
      const payload = {
        userId: user.uid,
        caseId,
        profile,
        messages: [...messages, { role: "user", text }],
      };

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("AI backend error");

      const data: AIResponsePayload = await res.json();

      // Add AI reply
      await addDoc(mref, {
        role: "bot",
        text: data.reply || "I’m here to help. Can you tell me more?",
        createdAt: serverTimestamp(),
      } as ChatMessage);

      // Save analysis (optional)
      if (data.analysis) {
        await setDoc(
          caseRef,
          {
            analysis: data.analysis,
            analysisUpdatedAt: serverTimestamp(),
          },
          { merge: true }
        );
      }
    } catch (err) {
      console.error("⚠️ AI backend failed:", err);
      await addDoc(mref, {
        role: "bot",
        text: "Sorry, I couldn't process your message right now.",
        createdAt: serverTimestamp(),
      } as ChatMessage);
    } finally {
      setSending(false);
    }
  };

  return { loading, sending, caseId, messages, profile, sendUserMessage };
}
