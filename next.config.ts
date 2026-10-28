import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Explicitly set Turbopack workspace root to this project
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Enable server-side compression for faster data transfer
  compress: true,
  reactStrictMode: true,

  // Modern image optimization with AVIF and WebP support + 1-year buffer cache
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Tree-shake large barrels for faster compilation, smaller bundles, and reduced memory buffers
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },

  // Authorizes LAN hostnames for hot reload and asset requests
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "10.120.36.237:3000",
    "192.168.29.164",
    "*.local",
  ],

  // High-performance HTTP caching and security headers
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2|woff)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Permanent 301 redirects for consolidated /blog route architecture
  async redirects() {
    return [
      {
        source: "/showblog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/viewblog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/viewblog/:id*",
        destination: "/blog/:id*",
        permanent: true,
      },
      {
        source: "/createblog",
        destination: "/blog/create",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;