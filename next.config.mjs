/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    rewrites: async () => [
      {
        source: "/api/:path*",
        destination: `http://localhost:8000/:path*/`,
        basePath: false,
      },
    ],
  };
  
  export default nextConfig;
  