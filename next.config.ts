import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/services",
        destination: "/",
      },
      {
        source: "/service",
        destination: "/",
      },
      {
        source: "/work",
        destination: "/",
      },
      {
        source: "/about",
        destination: "/",
      },
      {
        source: "/about-us",
        destination: "/",
      },
      {
        source: "/contact",
        destination: "/",
      },
      {
        source: "/cta",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;