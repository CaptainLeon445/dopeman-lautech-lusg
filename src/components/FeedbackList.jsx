import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { C, mono, cardBase } from "../theme";

export default function FeedbackList() {
  const [items, setItems] = useState(null); // null = loading

  useEffect(() => {
    const q = query(
      collection(db, "feedback_public"),
      orderBy("createdAt", "desc"),
      limit(20)
    );
    const unsubscribe = onSnapshot(
      q,
      (snap) => setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
      () => setItems([])
    );
    return unsubscribe;
  }, []);

  if (items === null) {
    return (
      <p className="text-sm text-center mb-10" style={{ color: C.textFaint }}>
        Loading feedback…
      </p>
    );
  }

  if (items.length === 0) {
    return (
      <p className="text-sm text-center mb-10" style={{ color: C.textFaint }}>
        No feedback yet — be the first to share yours.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-5 mb-10">
      {items.map((f) => (
        <div key={f.id} className="h-full p-6" style={cardBase}>
          <MessageCircle size={18} style={{ color: C.gold, marginBottom: "0.75rem" }} />
          <p className="text-sm leading-relaxed italic mb-4" style={{ color: C.textDim }}>
            "{f.comment}"
          </p>
          <p className="text-sm font-semibold" style={{ color: C.text }}>
            {f.name}
          </p>
          {f.status && (
            <p className="text-xs" style={{ color: C.textFaint, fontFamily: mono }}>
              {f.status}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
