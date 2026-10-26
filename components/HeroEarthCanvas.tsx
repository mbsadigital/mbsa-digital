"use client";

import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const GLOBE_RADIUS = 2.18;

function NormalEarth({ isVisible }: { isVisible: boolean }) {
  const earthRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

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
            normalScale={new THREE.Vector2(0.85, 0.85)}
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

function EarthLoadingFallback() {
  return null;
}

export default function HeroEarthCanvas() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={containerRef} className="w-full h-full">
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
        <Suspense fallback={<EarthLoadingFallback />}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[-6, 4, 6]} intensity={3.8} color="#ffffff" />
          <directionalLight position={[6, -2, -3]} intensity={1.2} color="#00d4ff" />
          <pointLight position={[-4, 2, 4]} intensity={1.8} color="#e0f7fa" />

          <NormalEarth isVisible={isVisible} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.55}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
