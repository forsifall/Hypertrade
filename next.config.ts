import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {},

  typescript: {
    ignoreBuildErrors: true,
  },
  
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },

  env: {
    API_KEY: process.env.GEMINI_API_KEY,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "."),
    };
    return config;
  },
};

export default nextConfig;
