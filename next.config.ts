import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático (pasta out/) para hospedar na Cloudflare Pages
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
