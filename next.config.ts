import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
