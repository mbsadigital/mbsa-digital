"use client";

import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Filter out known upstream Three.js r183 deprecation warning generated internally by @react-three/fiber
if (typeof window !== "undefined") {
  const origWarn = console.warn;
  console.warn = (...args: unknown[]) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.Clock: This module has been deprecated")) {
      return;
    }
    origWarn.apply(console, args);
  };
}

const GLOBE_RADIUS = 2.18;

const NORMAL_SCALE = new THREE.Vector2(0.85, 0.85);

function NormalEarth({ isVisible, onReady }: { isVisible: boolean; onReady?: () => void }) {
  const earthRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  const { viewport } = useThree();
  const responsiveScale = useMemo(() => {
    const minDim = Math.min(viewport.width, viewport.height);
    return Math.min((minDim * 0.72) / (GLOBE_RADIUS * 2), 1.0);
  }, [viewport.width, viewport.height]);

  // Load NASA photorealistic Earth textures from public/earth
  const [dayMap, cloudsMap, specularMap, normalMap] = useTexture([
    "/earth/earth_daymap.jpg",
    "/earth/earth_clouds.png",
    "/earth/earth_specular.jpg",
    "/earth/earth_normal.jpg",
  ]);

  // Atmospheric Fresnel Rim Shader
  const atmosphereShader = useMemo(() => {
    return {
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
          gl_FragColor = vec4(0.0, 0.78, 1.0, 1.0) * intensity * 1.6;
        }
      `,
    };
  }, []);

  // Frame loop: Only animate when visible to save CPU/GPU and prevent buffering
  useFrame((_, delta) => {
    if (!isVisible) return;
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.08;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.105;
    }
  });

  return (
    <group scale={responsiveScale}>
      {/* 1. Earth Core Globe */}
      <group ref={earthRef} rotation={[0.22, -1.25, 0]}>
        <mesh>
          <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
          <meshStandardMaterial
            map={dayMap}
            normalMap={normalMap}
            normalScale={NORMAL_SCALE}
            roughnessMap={specularMap}
            roughness={0.42}
            metalness={0.12}
          />
        </mesh>

        {/* 2. Soft Dynamic Cloud Layer */}
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[GLOBE_RADIUS + 0.024, 48, 48]} />
          <meshStandardMaterial
            map={cloudsMap}
            transparent={true}
            opacity={0.88}
            blending={THREE.NormalBlending}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* 3. Luminous Cyan Atmospheric Rim Glow */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[GLOBE_RADIUS + 0.075, 48, 48]} />
        <shaderMaterial
          vertexShader={atmosphereShader.vertexShader}
          fragmentShader={atmosphereShader.fragmentShader}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent={true}
        />
      </mesh>
    </group>
  );
}

function checkWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function EarthStaticFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      <div className="relative w-[75%] h-[75%] rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_60px_rgba(234,88,12,0.45)]">
        {/* Photorealistic Spherical Earth Background with 3D Shader Depth */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 30%, #FDBA74 0%, #FB923C 18%, #EA580C 45%, #9A3412 70%, #431407 90%, #1c0a02 100%)",
            boxShadow:
              "inset -20px -20px 50px rgba(0, 0, 0, 0.85), inset 10px 10px 30px rgba(255, 255, 255, 0.35)",
          }}
        />

        {/* Ambient Orbiting Latitude & Longitude Grid */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen"
        >
          <ellipse cx="100" cy="100" rx="92" ry="32" fill="none" stroke="#FED7AA" strokeWidth="1.2" strokeDasharray="3 3" />
          <ellipse cx="100" cy="70" rx="82" ry="24" fill="none" stroke="#FED7AA" strokeWidth="0.9" strokeDasharray="2 3" />
          <ellipse cx="100" cy="130" rx="82" ry="24" fill="none" stroke="#FED7AA" strokeWidth="0.9" strokeDasharray="2 3" />
          <ellipse cx="100" cy="100" rx="40" ry="92" fill="none" stroke="#FED7AA" strokeWidth="1.2" />
          <ellipse cx="100" cy="100" rx="72" ry="92" fill="none" stroke="#FED7AA" strokeWidth="0.9" />
          <line x1="100" y1="8" x2="100" y2="192" stroke="#FED7AA" strokeWidth="1.2" />
        </svg>

        {/* Cyan Atmospheric Rim Fresnel */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 shadow-[inset_0_0_25px_rgba(34,211,238,0.5)]" />
      </div>
    </div>
  );
}

class CanvasErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: React.ReactNode; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export default function HeroEarthCanvas() {
  const [isVisible, setIsVisible] = useState(true);
  const [isEarthReady, setIsEarthReady] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWebglSupported(checkWebGL());
  }, []);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (!webglSupported) {
    return <EarthStaticFallback />;
  }

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Instant Photorealistic Underlay - Eliminates any blank buffering flash while 3D WebGL textures stream in */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out pointer-events-none z-0 ${
          isEarthReady ? "opacity-0" : "opacity-100"
        }`}
      >
        <EarthStaticFallback />
      </div>

      <CanvasErrorBoundary fallback={<EarthStaticFallback />}>
        <Canvas
          camera={{
            position: [0, 0, 6.8],
            fov: 42,
          }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            preserveDrawingBuffer: false,
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[-6, 4, 6]} intensity={3.8} color="#ffffff" />
            <directionalLight position={[6, -2, -3]} intensity={1.2} color="#00d4ff" />
            <pointLight position={[-4, 2, 4]} intensity={1.8} color="#e0f7fa" />

            <NormalEarth isVisible={isVisible} onReady={() => setIsEarthReady(true)} />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.55}
              autoRotate={false}
            />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
