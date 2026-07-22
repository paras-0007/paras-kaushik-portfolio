"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

export function TiltCard({ children, className = "", max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (event.pointerType !== "mouse" || !node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--tilt-x", `${(-py * max).toFixed(2)}deg`);
    node.style.setProperty("--tilt-y", `${(px * max).toFixed(2)}deg`);
    node.classList.add("tilting");
  }

  function reset() {
    const node = ref.current;
    if (!node) return;
    node.style.removeProperty("--tilt-x");
    node.style.removeProperty("--tilt-y");
    node.classList.remove("tilting");
  }

  return (
    <div ref={ref} className={`tilt-card ${className}`} onPointerMove={handleMove} onPointerLeave={reset}>
      {children}
    </div>
  );
}
