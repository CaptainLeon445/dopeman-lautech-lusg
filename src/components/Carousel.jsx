import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { C } from "../theme";

const arrowBase = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "36px",
  height: "36px",
  borderRadius: "9999px",
  background: "rgba(11,17,32,0.55)",
  border: `1px solid ${C.line}`,
  color: C.text,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  backdropFilter: "blur(4px)",
};

export default function Carousel({ items, aspect = "4 / 3", autoPlayMs = 4000 }) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const containerRef = useRef(null);

  const goTo = useCallback((i) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (dragging || count <= 1) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), autoPlayMs);
    return () => clearInterval(timer);
  }, [dragging, count, autoPlayMs]);

  if (count === 0) return null;

  const onPointerDown = (e) => {
    if (e.target.closest("button")) return;
    setDragging(true);
    startX.current = e.clientX;
    containerRef.current?.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragging) return;
    setDragOffset(e.clientX - startX.current);
  };
  const endDrag = () => {
    if (!dragging) return;
    const width = containerRef.current?.offsetWidth || 1;
    const threshold = width * 0.15;
    if (dragOffset > threshold) prev();
    else if (dragOffset < -threshold) next();
    setDragging(false);
    setDragOffset(0);
  };
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      tabIndex={0}
      className="relative overflow-hidden select-none touch-pan-y"
      style={{ aspectRatio: aspect, borderRadius: "16px", border: `1px solid ${C.line}`, background: C.panelAlt, outline: "none" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={() => dragging && endDrag()}
      onKeyDown={onKeyDown}
    >
      <p className="sr-only" aria-live="polite">
        {`Slide ${index + 1} of ${count}`}
      </p>

      <div
        className="flex h-full"
        style={{
          width: `${count * 100}%`,
          transform: `translateX(calc(${-index * (100 / count)}% + ${dragOffset}px))`,
          transition: dragging ? "none" : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="h-full" style={{ width: `${100 / count}%`, flexShrink: 0 }}>
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="w-full h-full"
              style={{
                objectFit: "cover",
                opacity: i === index ? 1 : 0.5,
                transition: "opacity 500ms ease",
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button type="button" onClick={prev} aria-label="Previous photo" style={{ ...arrowBase, left: "12px" }}>
            <ChevronLeft size={18} />
          </button>
          <button type="button" onClick={next} aria-label="Next photo" style={{ ...arrowBase, right: "12px" }}>
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                style={{
                  width: i === index ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "9999px",
                  background: i === index ? C.gold : "rgba(255,255,255,0.4)",
                  transition: "all 250ms ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
