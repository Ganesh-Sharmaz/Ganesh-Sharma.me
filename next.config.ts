import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // NO basePath or assetPrefix, so assets load from /_next/...
  output: "export",            // static export suitable for GitHub Pages
  trailingSlash: true,         // helps GH Pages serve routes
  images: { unoptimized: true } // if using next/image with static export
};

export default nextConfig;
