import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        port: "",
        pathname: "/userupload/**",
      },
      {
        protocol: "https",
        hostname: "cdn.cosmos.so",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
