import { useState } from "react";
import { Quote, Loader2, CheckCircle2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { C, serif, mono, cardBase } from "../theme";

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: `1px solid ${C.line}`,
  borderRadius: "10px",
  padding: "0.7rem 0.9rem",
  color: C.text,
  outline: "none",
};

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block mb-4">
      <span
        className="block text-xs uppercase mb-2"
        style={{ color: C.textFaint, fontFamily: mono, letterSpacing: "0.1em" }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !comment.trim()) {
      setError("Please fill in your name, email, and comment.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await addDoc(collection(db, "feedback"), {
        name: name.trim(),
        status: status.trim(),
        email: email.trim(),
        comment: comment.trim(),
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
      setName("");
      setStatus("");
      setEmail("");
      setComment("");
    } catch (err) {
      setError("Something went wrong sending your feedback. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="max-w-xl mx-auto text-center p-10"
        style={{ ...cardBase, borderColor: "rgba(242,169,59,0.4)" }}
      >
        <CheckCircle2 size={28} style={{ color: C.gold, margin: "0 auto 1rem" }} />
        <p className="text-lg mb-2" style={{ fontFamily: serif, fontWeight: 600 }}>
          Thanks — feedback received.
        </p>
        <p className="text-sm" style={{ color: C.textDim }}>
          The New Dawn team will read it.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm underline"
          style={{ color: C.gold }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 md:p-8"
      style={cardBase}
    >
      <Quote size={20} style={{ color: C.gold, marginBottom: "1rem" }} />

      <div className="grid sm:grid-cols-2 gap-x-4">
        <Field label="Name" htmlFor="fb-name">
          <input
            id="fb-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            style={inputStyle}
            required
          />
        </Field>
        <Field label="Status (optional)" htmlFor="fb-status">
          <input
            id="fb-status"
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="e.g. 300L, College of Agricultural Sciences"
            style={inputStyle}
          />
        </Field>
      </div>

      <Field label="Email address" htmlFor="fb-email">
        <input
          id="fb-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={inputStyle}
          required
        />
      </Field>

      <Field label="Comment" htmlFor="fb-comment">
        <textarea
          id="fb-comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="What should DOPEMAN and the team know?"
          rows={4}
          style={{ ...inputStyle, resize: "vertical" }}
          required
        />
      </Field>

      {error && (
        <p className="text-sm mb-4" style={{ color: C.coral }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 rounded-full font-semibold px-6 py-3 transition-colors"
        style={{
          background: C.gold,
          color: C.goldInk,
          opacity: submitting ? 0.7 : 1,
          cursor: submitting ? "not-allowed" : "pointer",
        }}
      >
        {submitting && <Loader2 size={16} className="animate-spin" />}
        {submitting ? "Sending…" : "Send feedback"}
      </button>
    </form>
  );
}
