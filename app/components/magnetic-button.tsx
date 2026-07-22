"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type PointerEvent, type ReactNode } from "react";

const CLAMP = 16;

function clamp(value: number) {
  return Math.max(-CLAMP, Math.min(CLAMP, value));
}

export function MagneticButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 22, mass: 0.4 });

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (event.pointerType !== "mouse" || !node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = node.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set(clamp(relX * 0.3));
    y.set(clamp(relY * 0.4));
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div ref={ref} className={`magnetic-wrap ${className}`} style={{ x: springX, y: springY }} onPointerMove={handleMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  );
}
