import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/taterzleaderboard", destination: "/", permanent: true },
      { source: "/exponentleaderboard", destination: "/", permanent: true },
      { source: "/oldlb", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
