import type { NextConfig } from "next";

const nextConfig = {
    webpack(config: any) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;

export default nextConfig;
