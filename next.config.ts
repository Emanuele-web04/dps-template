import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        port: "",
        pathname: "/**",
      },
        {
          protocol: "https",
          hostname: "img.icons8.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "cdn.dribbble.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "ai-saas-dpstemplate.vercel.app",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "framerusercontent.com",
          port: "",
          pathname: "/**",
        },
    ],
  },
  
  async rewrites() {
    return [
      {
        // Match everything
        source: '/:path*',
        // Only when the host is the waitlist subdomain
        has: [
          {
            type: 'host',
            value: 'waitlist.dpstemplates.com',
          },
        ],
        // Internally serve from /waitlist
        destination: '/waitlist/:path*',
      },
    ]
  },
};

export default nextConfig;
