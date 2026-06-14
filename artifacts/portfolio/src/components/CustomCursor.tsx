import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ("ontouchstart" in window) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };
    document.addEventListener("mousemove", onMove);

    const onEnter = () => { hovering = true; };
    const onLeave = () => { hovering = false; };
    const bindLinks = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    bindLinks();

    let raf: number;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const lag = 0.1;
      ringX += (mouseX - ringX) * lag;
      ringY += (mouseY - ringY) * lag;
      const s = hovering ? 56 : 38;
      ring.style.transform = `translate(${ringX - s / 2}px, ${ringY - s / 2}px)`;
      ring.style.width = `${s}px`;
      ring.style.height = `${s}px`;
      ring.style.opacity = hovering ? "0.9" : "0.5";
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 12,
          height: 12,
          background: "#F5A623",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
          top: 0,
          left: 0,
          willChange: "transform",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          border: "1.5px solid #F5A623",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          top: 0,
          left: 0,
          willChange: "transform, width, height",
          transition: "width 0.18s ease, height 0.18s ease, opacity 0.18s ease",
        }}
      />
    </>
  );
}
