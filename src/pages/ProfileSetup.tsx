import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { healthQuestions, HealthQuestion } from "@/lib/questions";

type Answers = Record<string, any>;

export default function ProfileSetup() {
  const nav = useNavigate();
  const user = auth.currentUser;
  const [idx, setIdx] = useState(0);
  const q = healthQuestions[idx];
  const total = healthQuestions.length;

  const [answers, setAnswers] = useState<Answers>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists() && snap.data().profile) {
        setAnswers(snap.data().profile);
      }
      setLoading(false);
    };
    load();
  }, [user]);

  const canNext = useMemo(() => {
    if (!q) return false;
    const val = answers[q.id];
    if (q.type === "text" || q.type === "number") return val !== undefined && val !== "";
    if (q.type === "choice") return !!val;
    if (q.type === "multi") return Array.isArray(val) && val.length > 0;
    return true;
  }, [q, answers]);

  const handleNext = () => setIdx((i) => Math.min(total - 1, i + 1));
  const handleBack = () => setIdx((i) => Math.max(0, i - 1));

  const submitAll = async () => {
    if (!user) return;
    setSaving(true);
    try {
      await setDoc(
        doc(db, "users", user.uid),
        { profile: answers, profileUpdatedAt: new Date().toISOString() },
        { merge: true }
      );
      nav("/chat");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-muted-foreground">Loading your profile…</div>;

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-background text-foreground">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold font-display">Swasthya Health Profile</h1>
        <span className="text-sm text-muted-foreground">{idx + 1} / {total}</span>
      </div>

      <div className="w-full h-2 rounded-full bg-secondary/30 mb-6 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all"
          style={{ width: `${((idx + 1) / total) * 100}%` }}
        />
      </div>

      <div className="relative h-[440px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-soft"
          >
            <div className="text-lg font-medium mb-4">{q.question}</div>

            <QuestionRenderer
              q={q}
              value={answers[q.id]}
              onChange={(val) => setAnswers((a) => ({ ...a, [q.id]: val }))}
            />

            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                disabled={idx === 0}
                className="px-5 py-2 rounded-lg bg-secondary text-white disabled:opacity-40"
              >
                Back
              </button>

              {idx < total - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={!canNext}
                  className={`px-6 py-2 rounded-lg ${
                    canNext ? "bg-primary text-white" : "bg-gray-300 text-gray-500"
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={submitAll}
                  disabled={saving || !canNext}
                  className={`px-6 py-2 rounded-lg ${
                    !canNext ? "bg-gray-300 text-gray-500" : "bg-green-600 text-white"
                  }`}
                >
                  {saving ? "Saving…" : "Finish & Continue"}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function QuestionRenderer({
  q,
  value,
  onChange,
}: {
  q: HealthQuestion;
  value: any;
  onChange: (val: any) => void;
}) {
  const base = "w-full border border-border rounded-lg p-3 bg-background text-foreground";

  if (q.type === "text")
    return (
      <input
        className={base}
        placeholder={q.placeholder || "Type your answer"}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
    );

  if (q.type === "number")
    return (
      <input
        type="number"
        className={base}
        placeholder="Enter a number"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value ? Number(e.target.value) : "")}
      />
    );

  if (q.type === "choice" && q.options)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.options.map((op) => (
          <button
            type="button"
            key={op}
            onClick={() => onChange(op)}
            className={`text-left border rounded-lg px-4 py-3 ${
              value === op
                ? "bg-primary/10 border-primary text-primary"
                : "bg-white border-border"
            }`}
          >
            {op}
          </button>
        ))}
      </div>
    );

  if (q.type === "multi" && q.options) {
    const arr: string[] = Array.isArray(value) ? value : [];
    const toggle = (op: string) => {
      const next = new Set(arr);
      next.has(op) ? next.delete(op) : next.add(op);
      onChange(Array.from(next));
    };

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options.map((op) => {
            const active = arr.includes(op);
            return (
              <button
                type="button"
                key={op}
                onClick={() => toggle(op)}
                className={`text-left border rounded-lg px-4 py-3 ${
                  active
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-white border-border"
                }`}
              >
                {op}
              </button>
            );
          })}
        </div>

        {q.allowCustom && (
          <CustomAdder
            label="Add your own"
            onAdd={(custom) => {
              if (!custom) return;
              if (!arr.includes(custom)) onChange([...arr, custom]);
            }}
          />
        )}
      </div>
    );
  }

  return null;
}

function CustomAdder({ label, onAdd }: { label: string; onAdd: (v: string) => void }) {
  const [txt, setTxt] = useState("");
  return (
    <div className="flex gap-2 mt-3">
      <input
        className="flex-1 border border-border rounded-lg p-3 bg-background"
        placeholder={`${label} (optional)`}
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          const v = txt.trim();
          if (v) onAdd(v);
          setTxt("");
        }}
        className="px-4 py-2 rounded-lg bg-primary text-white"
      >
        Add
      </button>
    </div>
  );
}
