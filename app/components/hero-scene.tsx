"use client";

import dynamic from "next/dynamic";

const HeroSceneCanvas = dynamic(() => import("./hero-scene-canvas"), {
  ssr: false,
  loading: () => <div className="hero-scene-fallback" />,
});

export function HeroScene() {
  return (
    <div className="hero-scene-layer" aria-hidden="true">
      <HeroSceneCanvas />
    </div>
  );
}
