// src/components/ProfileGate.tsx
import { ReactNode, useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

export default function ProfileGate({ children }: { children: ReactNode }) {
  const user = auth.currentUser;
  const [loading, setLoading] = useState(true);
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      if (!user) { setHasProfile(false); setLoading(false); return; }
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      const ok = snap.exists() && !!snap.data().profile;
      setHasProfile(ok);
      setLoading(false);
    })();
  }, [user]);

  if (loading) return <div className="p-8 text-center text-muted-foreground">Checking your profile…</div>;
  if (!hasProfile) return <Navigate to="/profile-setup" replace />;

  return <>{children}</>;
}
