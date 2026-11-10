import path from "node:path";
import type { NextConfig } from "next";

// The UI library is linked via `file:../credigit-ser-web-component` (a symlink), so the
// build root must include the parent folder, and React must resolve to a single copy
// (the library's own dev install would otherwise load a second React).
const workspaceRoot = path.join(__dirname, "..");
const singleton = (name: string) => path.join(__dirname, "node_modules", name);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  transpilePackages: ["@credigit/web-ui"],
  outputFileTracingRoot: workspaceRoot,
  turbopack: {
    root: workspaceRoot,
    resolveAlias: {
      react: "./node_modules/react",
      "react-dom": "./node_modules/react-dom",
      "lucide-react": "./node_modules/lucide-react",
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: singleton("react"),
      "react-dom": singleton("react-dom"),
      "lucide-react": singleton("lucide-react"),
    };
    return config;
  },
};

export default nextConfig;
