/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ["avatar.iran.liara.run"],
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
  