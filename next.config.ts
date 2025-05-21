import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://coin-images.coingecko.com/coins/images/*')],
  },
};

export default nextConfig;
