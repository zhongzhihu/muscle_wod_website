import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/muscle_wod_website" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
