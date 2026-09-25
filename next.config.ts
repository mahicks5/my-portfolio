import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/resume", destination: "/Maxwell_Hicks_Resume.pdf", permanent: false },
      { source: "/github", destination: "https://github.com/mahicks5", permanent: false },
      { source: "/linkedin", destination: "https://www.linkedin.com/in/maxwell-h-2647622a4", permanent: false },
    ];
  },
};

export default nextConfig;
