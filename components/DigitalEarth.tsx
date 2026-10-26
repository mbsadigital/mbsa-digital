"use client";

import React, { useEffect, useRef } from "react";

/* ============================================================
   DIGITAL EARTH DATA & CONTINENT DEFINITIONS
============================================================ */

interface CityNode {
  name: string;
  lat: number;
  lon: number;
  region: string;
  colorDark: string;
  colorLight: string;
  glow: string;
}

const GLOBAL_NODES: CityNode[] = [
  { name: "San Francisco", lat: 37.7749, lon: -122.4194, region: "Americas", colorDark: "#38BDF8", colorLight: "#0284C7", glow: "#38BDF8" },
  { name: "New York", lat: 40.7128, lon: -74.006, region: "Americas", colorDark: "#22D3EE", colorLight: "#0891B2", glow: "#22D3EE" },
  { name: "London", lat: 51.5074, lon: -0.1278, region: "Europe", colorDark: "#A78BFA", colorLight: "#7C3AED", glow: "#8B5CF6" },
  { name: "Frankfurt", lat: 50.1109, lon: 8.6821, region: "Europe", colorDark: "#818CF8", colorLight: "#4F46E5", glow: "#6366F1" },
  { name: "Tokyo", lat: 35.6762, lon: 139.6503, region: "Asia", colorDark: "#F43F5E", colorLight: "#E11D48", glow: "#FB7185" },
  { name: "Singapore", lat: 1.3521, lon: 103.8198, region: "Asia", colorDark: "#34D399", colorLight: "#059669", glow: "#10B981" },
  { name: "Mumbai", lat: 19.076, lon: 72.8777, region: "Asia", colorDark: "#FB923C", colorLight: "#EA580C", glow: "#F97316" },
  { name: "Dubai", lat: 25.2048, lon: 55.2708, region: "Mideast", colorDark: "#FBBF24", colorLight: "#D97706", glow: "#F59E0B" },
  { name: "Sydney", lat: -33.8688, lon: 151.2093, region: "Oceania", colorDark: "#2DD4BF", colorLight: "#0D9488", glow: "#14B8A6" },
  { name: "São Paulo", lat: -23.5505, lon: -46.6333, region: "Americas", colorDark: "#C084FC", colorLight: "#9333EA", glow: "#A855F7" },
  { name: "Cape Town", lat: -33.9249, lon: 18.4241, region: "Africa", colorDark: "#FB7185", colorLight: "#BE123C", glow: "#F43F5E" },
  { name: "Seoul", lat: 37.5665, lon: 126.978, region: "Asia", colorDark: "#60A5FA", colorLight: "#2563EB", glow: "#3B82F6" },
];

interface Connection {
  from: number;
  to: number;
  colorDark: string;
  colorLight: string;
  glow: string;
}

const CONNECTIONS: Connection[] = [
  { from: 0, to: 1, colorDark: "#38BDF8", colorLight: "#0284C7", glow: "#38BDF8" }, // SF - NY (Cyan)
  { from: 1, to: 2, colorDark: "#818CF8", colorLight: "#4F46E5", glow: "#6366F1" }, // NY - London (Indigo)
  { from: 2, to: 3, colorDark: "#A78BFA", colorLight: "#7C3AED", glow: "#8B5CF6" }, // London - Frankfurt (Purple)
  { from: 3, to: 7, colorDark: "#FBBF24", colorLight: "#D97706", glow: "#F59E0B" }, // Frankfurt - Dubai (Gold)
  { from: 7, to: 6, colorDark: "#FB923C", colorLight: "#EA580C", glow: "#F97316" }, // Dubai - Mumbai (Orange)
  { from: 6, to: 5, colorDark: "#34D399", colorLight: "#059669", glow: "#10B981" }, // Mumbai - Singapore (Emerald)
  { from: 5, to: 4, colorDark: "#F43F5E", colorLight: "#E11D48", glow: "#FB7185" }, // Singapore - Tokyo (Coral)
  { from: 4, to: 11, colorDark: "#60A5FA", colorLight: "#2563EB", glow: "#3B82F6" }, // Tokyo - Seoul (Ice Blue)
  { from: 4, to: 0, colorDark: "#22D3EE", colorLight: "#0891B2", glow: "#06B6D4" }, // Tokyo - SF (Pacific Cyan)
  { from: 5, to: 8, colorDark: "#2DD4BF", colorLight: "#0D9488", glow: "#14B8A6" }, // Singapore - Sydney (Teal)
  { from: 1, to: 9, colorDark: "#C084FC", colorLight: "#9333EA", glow: "#A855F7" }, // NY - São Paulo (Violet)
  { from: 2, to: 10, colorDark: "#FB7185", colorLight: "#BE123C", glow: "#F43F5E" }, // London - Cape Town (Pink)
];

/* Land detection on spherical coordinates */
function isLand(lat: number, lon: number): boolean {
  let l = lon;
  while (l > 180) l -= 360;
  while (l < -180) l += 360;

  // North America
  if (lat >= 15 && lat <= 72 && l >= -168 && l <= -52) {
    if (lat < 28 && l < -105) return false;
    if (lat < 24 && l > -80) return false;
    return true;
  }
  // South America
  if (lat >= -56 && lat <= 13 && l >= -82 && l <= -34) {
    if (lat < -20 && l > -40) return false;
    return true;
  }
  // Europe
  if (lat >= 36 && lat <= 71 && l >= -10 && l <= 42) {
    return true;
  }
  // Africa
  if (lat >= -35 && lat <= 37 && l >= -18 && l <= 52) {
    if (lat > 20 && l < -10) return false;
    if (lat < -15 && l < 10) return false;
    return true;
  }
  // Asia
  if (lat >= 5 && lat <= 75 && l >= 42 && l <= 170) {
    if (lat < 22 && l < 60) return false;
    return true;
  }
  // Australia & New Zealand
  if (lat >= -47 && lat <= -10 && l >= 112 && l <= 178) {
    return true;
  }
  // Japan
  if (lat >= 30 && lat <= 46 && l >= 129 && l <= 146) {
    return true;
  }
  // Indonesia / Malaysia / Philippines
  if (lat >= -11 && lat <= 20 && l >= 95 && l <= 142) {
    return true;
  }
  // Greenland
  if (lat >= 60 && lat <= 83 && l >= -73 && l <= -12) {
    return true;
  }
  return false;
}

/* Color palette per region */
function getRegionColors(lat: number, lon: number): { dark: string; light: string; glow: string } {
  let l = lon;
  while (l > 180) l -= 360;
  while (l < -180) l += 360;

  // Americas: Cyan / Ice Blue
  if (l >= -168 && l <= -34) {
    return { dark: "#38BDF8", light: "#0284C7", glow: "#0EA5E9" };
  }
  // Europe: Electric Indigo / Purple
  if (l >= -18 && l <= 45 && lat >= 35) {
    return { dark: "#818CF8", light: "#4F46E5", glow: "#6366F1" };
  }
  // Africa: Vibrant Coral / Rose
  if (l >= -18 && l <= 52 && lat < 35) {
    return { dark: "#FB7185", light: "#E11D48", glow: "#F43F5E" };
  }
  // Asia: Cyber Amber / Solar Orange
  if (l > 45 && l <= 145 && lat >= 5) {
    return { dark: "#FB923C", light: "#EA580C", glow: "#F97316" };
  }
  // Australia / Oceania: Neon Emerald / Mint
  return { dark: "#34D399", light: "#059669", glow: "#10B981" };
}

/* Lat/Lon to 3D Cartesian Coordinate */
const latLonToSphere = (lat: number, lon: number, r: number) => {
  const phiRad = (90 - lat) * (Math.PI / 180);
  const thetaRad = (lon + 180) * (Math.PI / 180);

  const x = -(r * Math.sin(phiRad) * Math.cos(thetaRad));
  const z = r * Math.sin(phiRad) * Math.sin(thetaRad);
  const y = r * Math.cos(phiRad);
  return { x, y, z };
};

/* 3D Point Rotation */
const rotate3D = (
  p: { x: number; y: number; z: number },
  ry: number,
  rx: number
) => {
  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);
  const x1 = p.x * cosY - p.z * sinY;
  const z1 = p.x * sinY + p.z * cosY;

  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);
  const y2 = p.y * cosX - z1 * sinX;
  const z2 = p.y * sinX + z1 * cosX;

  return { x: x1, y: y2, z: z2 };
};

/* ============================================================
   MAIN DIGITAL EARTH COMPONENT
============================================================ */

export default function DigitalEarth() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Retina / High-DPI Canvas scaler
    const setupCanvas = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupCanvas();
    window.addEventListener("resize", setupCanvas);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.0004;
      targetMouseY = (e.clientY - height / 2) * 0.0004;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Rotation state
    let rotY = 0.5;
    let rotX = 0.22;

    // Generate Surface Particles with Land-Mass Sampling
    interface EarthDot {
      x: number;
      y: number;
      z: number;
      isLand: boolean;
      darkColor: string;
      lightColor: string;
      glowColor: string;
      baseSize: number;
    }

    const dots: EarthDot[] = [];
    const TOTAL_SURFACE_SAMPLES = 950;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < TOTAL_SURFACE_SAMPLES; i++) {
      const yNorm = 1 - (i / (TOTAL_SURFACE_SAMPLES - 1)) * 2; // -1 to 1
      const radiusAtY = Math.sqrt(Math.max(0, 1 - yNorm * yNorm));
      const theta = phi * i;

      const xNorm = Math.cos(theta) * radiusAtY;
      const zNorm = Math.sin(theta) * radiusAtY;

      // Convert normal vector to lat/lon for land testing
      const lat = Math.asin(Math.max(-1, Math.min(1, yNorm))) * (180 / Math.PI);
      const lon = Math.atan2(zNorm, -xNorm) * (180 / Math.PI) - 180;

      const land = isLand(lat, lon);
      const palette = getRegionColors(lat, lon);

      dots.push({
        x: xNorm,
        y: yNorm,
        z: zNorm,
        isLand: land,
        darkColor: palette.dark,
        lightColor: palette.light,
        glowColor: palette.glow,
        baseSize: land ? 1.6 : 0.9,
      });
    }

    // Floating Stardust / Cosmic Particles
    const NUM_STARS = 140;
    const stars: { x: number; y: number; s: number; a: number; speed: number; hue: string }[] = [];
    const starHues = ["#38BDF8", "#F97316", "#818CF8", "#FBBF24", "#34D399"];

    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        s: Math.random() * 2.0 + 0.5,
        a: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.008 + 0.003,
        hue: starHues[i % starHues.length],
      });
    }

    let pulseTime = 0;

    // ==========================================================
    // RENDER LOOP
    // ==========================================================
    const render = () => {
      pulseTime += 0.02;

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Auto rotation + interactive tilt
      rotY += 0.0035 + mouseX * 0.015;
      rotX = 0.22 + mouseY * 0.4;

      ctx.clearRect(0, 0, width, height);

      // Check active theme
      const isDark =
        typeof document !== "undefined"
          ? document.documentElement.classList.contains("dark")
          : true;

      // Dynamic Globe Dimensions
      const globeRadius = Math.min(width * 0.42, Math.max(height * 0.38, 300));
      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 800;

      // --------------------------------------------------------
      // 1. COSMIC BACKGROUND NEBULA / DIGITAL AURORA GLOW
      // --------------------------------------------------------
      // Left Cyan Aura
      const leftGlow = ctx.createRadialGradient(
        centerX - globeRadius * 0.55,
        centerY - globeRadius * 0.2,
        globeRadius * 0.2,
        centerX - globeRadius * 0.55,
        centerY - globeRadius * 0.2,
        globeRadius * 1.5
      );
      if (isDark) {
        leftGlow.addColorStop(0, "rgba(6, 182, 212, 0.22)");
        leftGlow.addColorStop(0.5, "rgba(99, 102, 241, 0.08)");
        leftGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      } else {
        leftGlow.addColorStop(0, "rgba(14, 165, 233, 0.16)");
        leftGlow.addColorStop(0.5, "rgba(99, 102, 241, 0.05)");
        leftGlow.addColorStop(1, "rgba(250, 248, 245, 0)");
      }
      ctx.fillStyle = leftGlow;
      ctx.beginPath();
      ctx.arc(centerX - globeRadius * 0.55, centerY - globeRadius * 0.2, globeRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Right Solar Amber/Orange Aura
      const rightGlow = ctx.createRadialGradient(
        centerX + globeRadius * 0.55,
        centerY + globeRadius * 0.2,
        globeRadius * 0.2,
        centerX + globeRadius * 0.55,
        centerY + globeRadius * 0.2,
        globeRadius * 1.5
      );
      if (isDark) {
        rightGlow.addColorStop(0, "rgba(249, 115, 22, 0.20)");
        rightGlow.addColorStop(0.5, "rgba(234, 88, 12, 0.06)");
        rightGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      } else {
        rightGlow.addColorStop(0, "rgba(234, 88, 12, 0.16)");
        rightGlow.addColorStop(0.5, "rgba(249, 115, 22, 0.04)");
        rightGlow.addColorStop(1, "rgba(250, 248, 245, 0)");
      }
      ctx.fillStyle = rightGlow;
      ctx.beginPath();
      ctx.arc(centerX + globeRadius * 0.55, centerY + globeRadius * 0.2, globeRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // --------------------------------------------------------
      // 2. STARDUST / FLOATING MULTI-COLOR CYBER PARTICLES
      // --------------------------------------------------------
      stars.forEach((star) => {
        star.a += Math.sin(pulseTime * star.speed * 80) * 0.006;
        const alpha = Math.max(0.12, Math.min(0.85, star.a));
        ctx.fillStyle = isDark
          ? star.hue
          : star.hue === "#FBBF24" ? "#D97706" : star.hue;
        ctx.globalAlpha = isDark ? alpha * 0.7 : alpha * 0.45;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.s, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // --------------------------------------------------------
      // 3. EARTH SPHERE INNER VOLUME (Mass & Depth Gradient)
      // --------------------------------------------------------
      const sphereCore = ctx.createRadialGradient(
        centerX - globeRadius * 0.25,
        centerY - globeRadius * 0.25,
        globeRadius * 0.1,
        centerX,
        centerY,
        globeRadius
      );
      if (isDark) {
        sphereCore.addColorStop(0, "rgba(15, 23, 42, 0.75)");
        sphereCore.addColorStop(0.7, "rgba(8, 7, 6, 0.85)");
        sphereCore.addColorStop(1, "rgba(12, 10, 9, 0.35)");
      } else {
        sphereCore.addColorStop(0, "rgba(248, 250, 252, 0.75)");
        sphereCore.addColorStop(0.7, "rgba(241, 245, 249, 0.65)");
        sphereCore.addColorStop(1, "rgba(226, 232, 240, 0.25)");
      }
      ctx.fillStyle = sphereCore;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.fill();

      // --------------------------------------------------------
      // 4. OUTER ORBITING HOLOGRAPHIC TELEMETRY RINGS
      // --------------------------------------------------------
      // Ring 1: Cyan / Electric Blue Orbit (Tilted -28 deg)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-0.48 + mouseX * 0.25);
      ctx.beginPath();
      ctx.ellipse(0, 0, globeRadius * 1.48, globeRadius * 0.44, 0, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? "rgba(56, 189, 248, 0.45)" : "rgba(2, 132, 199, 0.55)";
      ctx.lineWidth = 1.4;
      ctx.setLineDash([12, 14]);
      ctx.lineDashOffset = -pulseTime * 24;
      ctx.stroke();

      // Satellite 1: Glowing Cyan Data Node
      const satAngle1 = pulseTime * 0.7;
      const sat1X = Math.cos(satAngle1) * globeRadius * 1.48;
      const sat1Y = Math.sin(satAngle1) * globeRadius * 0.44;
      ctx.fillStyle = isDark ? "#38BDF8" : "#0284C7";
      ctx.shadowColor = "#38BDF8";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(sat1X, sat1Y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // Ring 2: Solar Amber / Orange Orbit (Tilted +34 deg)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(0.55 - mouseX * 0.2);
      ctx.beginPath();
      ctx.ellipse(0, 0, globeRadius * 1.36, globeRadius * 0.38, 0, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? "rgba(249, 115, 22, 0.40)" : "rgba(217, 119, 6, 0.50)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([8, 12]);
      ctx.lineDashOffset = pulseTime * 18;
      ctx.stroke();

      // Satellite 2: Glowing Amber Data Node
      const satAngle2 = -pulseTime * 0.9;
      const sat2X = Math.cos(satAngle2) * globeRadius * 1.36;
      const sat2Y = Math.sin(satAngle2) * globeRadius * 0.38;
      ctx.fillStyle = isDark ? "#FB923C" : "#EA580C";
      ctx.shadowColor = "#FB923C";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(sat2X, sat2Y, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // --------------------------------------------------------
      // 5. DIGITAL EARTH LATITUDE & LONGITUDE WIREFRAME LINES
      // --------------------------------------------------------
      const latSteps = [-60, -40, -20, 0, 20, 40, 60];
      latSteps.forEach((lat) => {
        const rad = (lat * Math.PI) / 180;
        const ringRadius = Math.cos(rad) * globeRadius;
        const ringY = Math.sin(rad) * globeRadius;

        ctx.beginPath();
        let first = true;
        for (let angle = 0; angle <= Math.PI * 2 + 0.1; angle += 0.12) {
          const pt = {
            x: Math.cos(angle) * ringRadius,
            y: ringY,
            z: Math.sin(angle) * ringRadius,
          };
          const rPt = rotate3D(pt, rotY, rotX);
          const scale = fov / (fov + rPt.z);
          const projX = centerX + rPt.x * scale;
          const projY = centerY + rPt.y * scale;

          if (rPt.z > -globeRadius * 0.15) {
            if (first) {
              ctx.moveTo(projX, projY);
              first = false;
            } else {
              ctx.lineTo(projX, projY);
            }
          } else {
            first = true;
          }
        }
        ctx.strokeStyle =
          lat === 0
            ? isDark
              ? "rgba(56, 189, 248, 0.50)"
              : "rgba(2, 132, 199, 0.65)"
            : isDark
            ? "rgba(148, 163, 184, 0.22)"
            : "rgba(100, 116, 139, 0.30)";
        ctx.lineWidth = lat === 0 ? 1.6 : 0.8;
        ctx.setLineDash(lat === 0 ? [] : [4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Longitude Lines
      const lonSteps = [0, 45, 90, 135, 180, 225, 270, 315];
      lonSteps.forEach((lon) => {
        const lonRad = (lon * Math.PI) / 180;
        ctx.beginPath();
        let first = true;
        for (let lat = -90; lat <= 90; lat += 6) {
          const latRad = (lat * Math.PI) / 180;
          const pt = {
            x: Math.cos(latRad) * Math.cos(lonRad) * globeRadius,
            y: Math.sin(latRad) * globeRadius,
            z: Math.cos(latRad) * Math.sin(lonRad) * globeRadius,
          };
          const rPt = rotate3D(pt, rotY, rotX);
          const scale = fov / (fov + rPt.z);
          const projX = centerX + rPt.x * scale;
          const projY = centerY + rPt.y * scale;

          if (rPt.z > -globeRadius * 0.15) {
            if (first) {
              ctx.moveTo(projX, projY);
              first = false;
            } else {
              ctx.lineTo(projX, projY);
            }
          } else {
            first = true;
          }
        }
        ctx.strokeStyle = isDark ? "rgba(148, 163, 184, 0.16)" : "rgba(100, 116, 139, 0.22)";
        ctx.lineWidth = 0.8;
        ctx.setLineDash([3, 7]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // --------------------------------------------------------
      // 6. CONTINENTAL SURFACE NODES (High-Density Multi-Color)
      // --------------------------------------------------------
      dots.forEach((dot) => {
        const pt = {
          x: dot.x * globeRadius,
          y: dot.y * globeRadius,
          z: dot.z * globeRadius,
        };
        const rPt = rotate3D(pt, rotY, rotX);
        const scale = fov / (fov + rPt.z);
        const projX = centerX + rPt.x * scale;
        const projY = centerY + rPt.y * scale;

        // Depth perspective (front points shine intensely, back points fade)
        const depthNorm = (rPt.z + globeRadius) / (2 * globeRadius); // 0 (far) to 1 (near)
        if (depthNorm > 0.1) {
          const alpha = depthNorm * (dot.isLand ? 0.95 : 0.35);
          const pointSize = Math.max(
            0.7,
            dot.isLand ? depthNorm * 2.8 : depthNorm * 1.4
          );

          ctx.fillStyle = isDark ? dot.darkColor : dot.lightColor;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(projX, projY, pointSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1.0;

      // --------------------------------------------------------
      // 7. GLOBAL CITY NODES & MULTI-COLOR CYBER ARCS
      // --------------------------------------------------------
      const projectedCities = GLOBAL_NODES.map((city) => {
        const spherePt = latLonToSphere(city.lat, city.lon, globeRadius);
        const rPt = rotate3D(spherePt, rotY, rotX);
        const scale = fov / (fov + rPt.z);
        const projX = centerX + rPt.x * scale;
        const projY = centerY + rPt.y * scale;
        const isFront = rPt.z > -globeRadius * 0.08;
        return { ...city, projX, projY, rPt, isFront };
      });

      // Render Laser Fiber Connectivity Arcs
      CONNECTIONS.forEach((conn, connIdx) => {
        const from = projectedCities[conn.from];
        const to = projectedCities[conn.to];

        if (from && to && (from.isFront || to.isFront)) {
          const midX = (from.projX + to.projX) / 2;
          const midY = (from.projY + to.projY) / 2;

          const dx = to.projX - from.projX;
          const dy = to.projY - from.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 2 || !isFinite(dist)) return;

          // Elevated parabolic curve
          const arcLift = Math.min(dist * 0.40, 75);
          const cpX = midX - (dy / dist) * arcLift;
          const cpY = midY + (dx / dist) * arcLift;
          if (!isFinite(cpX) || !isFinite(cpY)) return;

          // Glowing Arc Path
          ctx.beginPath();
          ctx.moveTo(from.projX, from.projY);
          ctx.quadraticCurveTo(cpX, cpY, to.projX, to.projY);
          ctx.strokeStyle = isDark ? conn.colorDark : conn.colorLight;
          ctx.globalAlpha = 0.55;
          ctx.lineWidth = 1.8;
          ctx.stroke();
          ctx.globalAlpha = 1.0;

          // Traveling Data Photon Packets (dual packets per arc)
          [0, 0.5].forEach((offset) => {
            const t = ((pulseTime * 0.65 + connIdx * 0.18 + offset) % 1);

            const packetX =
              (1 - t) * (1 - t) * from.projX +
              2 * (1 - t) * t * cpX +
              t * t * to.projX;
            const packetY =
              (1 - t) * (1 - t) * from.projY +
              2 * (1 - t) * t * cpY +
              t * t * to.projY;

            if (!isFinite(packetX) || !isFinite(packetY)) return;

            ctx.fillStyle = isDark ? "#FFFFFF" : conn.colorLight;
            ctx.shadowColor = conn.glow;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(packetX, packetY, 3.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          });
        }
      });

      // Render City Beacons with Radar Ripples & Names
      projectedCities.forEach((city) => {
        if (city.isFront) {
          const pulse = (Math.sin(pulseTime * 4 + city.lat) + 1) / 2;
          const ringSize = 4.5 + pulse * 7.5;

          // Outer radar beacon ripple
          ctx.strokeStyle = isDark ? city.colorDark : city.colorLight;
          ctx.globalAlpha = 0.85 - pulse * 0.65;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.arc(city.projX, city.projY, ringSize, 0, Math.PI * 2);
          ctx.stroke();
          ctx.globalAlpha = 1.0;

          // Core node bulb
          ctx.fillStyle = isDark ? "#FFFFFF" : city.colorLight;
          ctx.shadowColor = city.glow;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(city.projX, city.projY, 3.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // City Badge Tag
          ctx.font = "bold 9px 'Courier New', monospace";
          ctx.fillStyle = isDark ? "#F8FAFC" : "#0F172A";
          ctx.shadowColor = isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)";
          ctx.shadowBlur = 4;
          ctx.fillText(city.name, city.projX + 8, city.projY - 4);
          ctx.shadowBlur = 0;
        }
      });

      // --------------------------------------------------------
      // 8. ATMOSPHERIC FRESNEL HORIZON RIM GLOW
      // --------------------------------------------------------
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? "rgba(56, 189, 248, 0.45)" : "rgba(2, 132, 199, 0.55)";
      ctx.lineWidth = 2.2;
      ctx.shadowColor = isDark ? "#0EA5E9" : "#0284C7";
      ctx.shadowBlur = 16;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setupCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
