import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const basePath = isGitHubPages
  ? "/pedro-faber-portfolio"
  : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath,

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;