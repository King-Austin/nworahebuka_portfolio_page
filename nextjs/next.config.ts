import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "api.microlink.io" }],
  },
  async redirects() {
    return [
      {
        source: "/resume_nworah_ebuka.pdf",
        destination: "/resumes/Nworah_Ebuka_Augustus_Backend_Systems_Resume_2026.pdf",
        permanent: true,
      },
      {
        source: "/project/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
