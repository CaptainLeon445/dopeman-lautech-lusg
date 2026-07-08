import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0, style = {} }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "opacity 700ms ease-out, transform 700ms ease-out",
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
