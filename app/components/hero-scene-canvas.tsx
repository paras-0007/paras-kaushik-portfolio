"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type * as THREE from "three";

function Shapes() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(event: PointerEvent) {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    const node = group.current;
    if (!node) return;
    const ease = Math.min(1, delta * 2);
    node.rotation.y += (pointer.current.x * 0.55 - node.rotation.y) * ease;
    node.rotation.x += (-pointer.current.y * 0.3 - node.rotation.x) * ease;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
        <mesh position={[1.7, 0.5, -1]}>
          <icosahedronGeometry args={[1.05, 0]} />
          <meshStandardMaterial color="#ffb454" wireframe transparent opacity={0.55} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.85} floatIntensity={1.4}>
        <mesh position={[-1.9, -0.55, -1.6]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#8b7cff" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.9}>
        <mesh position={[0.1, 1.15, -2.4]}>
          <torusGeometry args={[0.55, 0.16, 16, 64]} />
          <meshStandardMaterial color="#5eead4" wireframe transparent opacity={0.45} />
        </mesh>
      </Float>
      <Sparkles count={70} scale={[7.5, 4.5, 4]} size={2.2} speed={0.35} color="#ffb454" opacity={0.55} />
    </group>
  );
}

function detectSupport() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

export default function HeroSceneCanvas() {
  const [supported] = useState(detectSupport);
  const [active, setActive] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node || !supported) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(node);
    function onVisibility() {
      setActive(!document.hidden);
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [supported]);

  if (!supported) return <div className="hero-scene-fallback" />;

  return (
    <div className="hero-scene-canvas-wrap" ref={wrapRef}>
      <Canvas
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        frameloop={active ? "always" : "never"}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[5, 5, 5]} intensity={40} color="#ffb454" />
        <pointLight position={[-5, -3, -2]} intensity={25} color="#8b7cff" />
        <Shapes />
      </Canvas>
    </div>
  );
}
