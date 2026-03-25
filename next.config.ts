import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@opennextjs/cloudflare"],
  },
  transpilePackages: ["@opennextjs/cloudflare"],
};

export default nextConfig;
